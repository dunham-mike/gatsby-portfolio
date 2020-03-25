import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import '../styles/styles.scss';

import PortfolioProject from '../components/portfolioProject';
import HeaderInfo from '../components/headerInfo';
import Hero from '../components/hero';
import Skills from '../components/skills';
import Portfolio from '../components/portfolio';
import Resume from '../components/resume';
import Contact from '../components/contact';
import AppPreview from '../components/appPreview';
import Footer from '../components/footer';

export default ({ data }) => {
    const [isAppPreviewActive, setIsAppPreviewActive] = useState(false);
    const [activeAppPreviewName, setActiveAppPreviewName] = useState(null);
    const [activeAppPreviewImageUrl, setActiveAppPreviewImageUrl] = useState(null);

    const openAppPreview = (name, url) => {
        setIsAppPreviewActive(true);
        setActiveAppPreviewName(name);
        setActiveAppPreviewImageUrl(url);
    };

    const closeAppPreview = () => {
        setIsAppPreviewActive(false);
        setActiveAppPreviewName(null);
        setActiveAppPreviewImageUrl(null);
    };

    const markdownArray = data.allMarkdownRemark.edges;
    const portfolioProjects = markdownArray
        .sort((a, b) => {
            return a.node.frontmatter.order - b.node.frontmatter.order
        })
        .map(project => {
            console.log('project:', project.node.frontmatter)
            return (
                <div class="column is-half">
                    <PortfolioProject 
                        projectInfo={project.node.frontmatter} 
                        openAppPreview={() => openAppPreview(project.node.frontmatter.title, project.node.frontmatter.preview)} 
                        closeAppPreview={closeAppPreview} 
                    />
                </div>
            );
        });

    return (
        <Layout>

            <HeaderInfo />

            <Hero />
            <Skills />
            <Portfolio portfolioProjects={portfolioProjects} />
            <Resume />
            <Contact />
            <Footer />

            <AppPreview 
                isAppPreviewActive={isAppPreviewActive}
                closeAppPreview={closeAppPreview}
                activeAppPreviewName={activeAppPreviewName}
                activeAppPreviewImageUrl={activeAppPreviewImageUrl}
            />

        </Layout>
    )
}

export const query = graphql`
    query {
        __typename
        allMarkdownRemark(filter: {frontmatter: {app_url: {ne: null}}}) {
            edges {
                node {
                    frontmatter {
                        title
                        app_url
                        description
                        github_url
                        order
                        screenshot
                        preview
                        technologies
                    }
                }
            }
        }
    }
`