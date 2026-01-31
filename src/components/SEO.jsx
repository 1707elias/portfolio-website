import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name = "Elias Schlappner", type = "website" }) => {
    return (
        <Helmet>
            <title>{title} | {name}</title>
            <meta name='description' content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;