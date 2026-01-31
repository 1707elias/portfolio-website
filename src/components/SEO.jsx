import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, name = "Elias Schlappner", type = "website" }) => {
    const siteUrl = "https://elias-schlappner.de";
    const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const previewImage = `${siteUrl}/og-preview.jpg`;

    return (
        <Helmet>
            <title>{title} | {name}</title>
            <meta name='description' content={description} />
            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:type" content={type} />
            <meta property="og:title" content={`${title} | ${name}`} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={previewImage} />
            <meta property="og:url" content={canonicalUrl} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={previewImage} />
        </Helmet>
    );
};

export default SEO;