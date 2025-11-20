import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const SEO = ({ title, description, image, url, type = 'website' }) => {
    const { language } = useLanguage();
    const siteTitle = 'Biopotions';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || 'Discover natural remedies for common ailments. Search by body part and save your favorite remedies.';

    // Use absolute URL for Open Graph image (required for social media)
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://biopotions.netlify.app';
    const metaImage = image || `${baseUrl}/og-image.png`;
    const metaUrl = url || baseUrl;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <html lang={language} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={fullTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={metaUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
            <meta name="twitter:image:alt" content={fullTitle} />
        </Helmet>
    );
};

export default SEO;
