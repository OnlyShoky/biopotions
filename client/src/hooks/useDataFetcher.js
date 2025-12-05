import { useState, useEffect } from 'react';
import { bodyPartsData as localData, ingredientsData as localIngredients } from '../data';
import { getBodyPartImage } from '../utils/imageMap';
import { ENABLE_BACKEND } from '../config';

const useDataFetcher = () => {
    const [data, setData] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [isUsingBackend, setIsUsingBackend] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // If backend is disabled via config, use local data immediately
            if (!ENABLE_BACKEND) {
                // Hydrate local data with ingredient details
                const hydratedLocalData = localData.map(bp => ({
                    ...bp,
                    ailments: bp.ailments.map(a => ({
                        ...a,
                        remedies: a.remedies.map(r => ({
                            ...r,
                            ingredients: r.ingredients?.map(i => ({
                                ...i,
                                ingredientId: localIngredients.find(ing => ing._id === i.ingredientId) || i.ingredientId
                            }))
                        }))
                    }))
                }));

                setData(hydratedLocalData);
                setIngredients(localIngredients);
                setIsUsingBackend(false);
                setLoading(false);
                return;
            }

            try {
                // Attempt to fetch from backend
                const [bodyPartsResponse, ingredientsResponse] = await Promise.all([
                    fetch('http://localhost:5000/api/bodyparts'),
                    fetch('http://localhost:5000/api/ingredients')
                ]);

                if (!bodyPartsResponse.ok || !ingredientsResponse.ok) {
                    throw new Error('Backend response was not ok');
                }

                const bodyPartsResult = await bodyPartsResponse.json();
                const ingredientsResult = await ingredientsResponse.json();

                // Hydrate with images since backend doesn't serve them yet
                const hydratedData = bodyPartsResult.map(item => ({
                    ...item,
                    image: getBodyPartImage(item.bodyPart.en)
                }));

                setData(hydratedData);
                setIngredients(ingredientsResult);
                setIsUsingBackend(true);
            } catch (err) {
                console.warn('Failed to fetch from backend, falling back to local data:', err);
                // Fallback to local data
                setData(localData);
                setIngredients(localIngredients);
                setIsUsingBackend(false);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, ingredients, isUsingBackend, loading, error };
};

export default useDataFetcher;
