import { useState, useEffect } from 'react';
import { bodyPartsData as localData } from '../data';
import { getBodyPartImage } from '../utils/imageMap';
import { ENABLE_BACKEND } from '../config';

const useDataFetcher = () => {
    const [data, setData] = useState([]);
    const [isUsingBackend, setIsUsingBackend] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // If backend is disabled via config, use local data immediately
            if (!ENABLE_BACKEND) {
                setData(localData);
                setIsUsingBackend(false);
                setLoading(false);
                return;
            }

            try {
                // Attempt to fetch from backend
                // Assuming backend is running on localhost:5000 and proxy is set up or CORS is handled
                // If no proxy, we might need full URL. Let's assume relative path for now and see if we need to adjust.
                // Given standard MERN setup, often a proxy is used in package.json.
                // If not, we'll try localhost:5000 directly.
                const response = await fetch('http://localhost:5000/api/bodyparts');

                if (!response.ok) {
                    throw new Error('Backend response was not ok');
                }

                const result = await response.json();

                // Hydrate with images since backend doesn't serve them yet
                const hydratedData = result.map(item => ({
                    ...item,
                    image: getBodyPartImage(item.bodyPart.en)
                }));

                setData(hydratedData);
                setIsUsingBackend(true);
            } catch (err) {
                console.warn('Failed to fetch from backend, falling back to local data:', err);
                // Fallback to local data
                setData(localData);
                setIsUsingBackend(false);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, isUsingBackend, loading, error };
};

export default useDataFetcher;
