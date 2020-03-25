// import React from "react"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const NotFoundPage = () => (
//   <Layout>
//     <SEO title="404: Not found" />
//     <h1>NOT FOUND</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//   </Layout>
// )

// export default NotFoundPage



// Per: https://stackoverflow.com/a/56246871
import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default () => {
  useEffect(() => {
    navigate('');
  }, []);
  return null;
};