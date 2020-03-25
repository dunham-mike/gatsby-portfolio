import React from 'react';
import { Helmet } from "react-helmet";

import favicon from '../../static/icons/favicon.ico';
import SEO from "../components/seo";

export const headerInfo = () => {
    return(
        <div className="application">
            <SEO />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Mike Dunham | Frontend Engineer</title>
                <link rel="canonical" href="https://mikedunham.netlify.com/" />
                <link rel="icon" href={favicon} />
                <link rel="apple-touch-icon" sizes="180x180" href="../../static/icons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="../../static/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="../../static/icons/favicon-16x16.png" />
                <link rel="manifest" href="../../static/icons/site.webmanifest"></link>
            </Helmet>
        </div>
    );
}

export default headerInfo;