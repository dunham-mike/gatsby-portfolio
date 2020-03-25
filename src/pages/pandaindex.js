import React, { useState } from "react"
import { Link, graphql } from "gatsby"
// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
import Layout from "../components/pandalayout"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/fontawesome-svg-core'
// import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faBuilding, faTrain, faLandmark, faGraduationCap, faFilePdf, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './styles.scss';
import PortfolioProject from '../components/portfolioProject';
import favicon from '../../static/icons/favicon.ico';


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
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Mike Dunham | Frontend Engineer</title>
                    <link rel="canonical" href="https://laughing-brahmagupta-91c87b.netlify.com/" />
                    <link rel="icon" href={favicon} />
                    <link rel="apple-touch-icon" sizes="180x180" href="../../static/icons/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="../../static/icons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="../../static/icons/favicon-16x16.png" />
                    <link rel="manifest" href="../../static/icons/site.webmanifest"></link>
                </Helmet>
            </div>
            <section class="hero is-medium">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="is-size-2 has-text-weight-bold">
                            Mike Dunham
                        </h1>
                        <h2 class="is-size-4">
                            Frontend engineer with a background in education, data, and politics
                        </h2>
                        <div style={{minHeight: "2.25rem" }} class="is-hidden-tablet"></div>
                        <div style={{minHeight: "1.5rem" }} class="is-hidden-mobile"></div>
                        <div class="is-size-5">
                            I specialize in <span class="has-text-weight-bold has-text-danger">
                                React</span> and <span class="has-text-weight-bold has-text-success">
                                    JavaScript</span> and am particularly interested in solving problems around 
                            <span style={{ whiteSpace: 'nowrap'}}>
                                <span> </span>
                                <span class="icon">
                                    <FontAwesomeIcon icon={faBuilding} />
                                </span>
                                <span> </span>
                                <span class="has-text-weight-bold">housing,</span>
                            </span>

                            <span style={{ whiteSpace: 'nowrap'}}>
                                <span> </span>
                                <span class="icon">
                                    <FontAwesomeIcon icon={faTrain} />
                                </span>
                                <span> </span>
                                <span class="has-text-weight-bold">transportation,</span> 
                            </span>
                            
                            <span style={{ whiteSpace: 'nowrap'}}>
                                <span> </span>
                                <span class="icon">
                                    <FontAwesomeIcon icon={faLandmark} />
                                </span>
                                <span> </span>
                                <span class="has-text-weight-bold">politics,</span>
                            </span>
                            <span> and&nbsp;&nbsp;</span>
                            <span style={{ whiteSpace: 'nowrap'}}>
                                <span class="icon">
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </span>
                                <span> </span>
                                <span class="has-text-weight-bold">education</span>
                            </span>
                
                            . Located in the <span class="has-text-weight-bold has-text-info">Bay Area</span>.
                        </div>
                    </div>
                </div>
                </section>
            
            <section class="section" id="skills">
                <div style={{minHeight: "1.5rem" }} class="is-hidden-mobile"></div>
                <div style={{minHeight: "0.75rem" }} class="is-hidden-tablet"></div>
                <div class="container">
                    <h1 class="title">
                        Skills
                    </h1>
                    <div class="tile is-ancestor">
                        <div class="tile is-8 is-vertical">
                            <div class="tile is-parent">
                                <div class="tile is-child notification is-link box">
                                    <p class="title">JavaScript and React</p>
                                    <p class="subtitle">Major libraries including: Redux, Gatsby, Axios, Material-UI, Bulma, Jest, Enzyme, Formik, Recharts</p>
                                </div>
                            </div>
                            <div class="tile">
                                <div class="tile is-block-touch is-block-desktop-only">
                                    <div class="tile is-parent">
                                        <div class="tile is-child notification is-info box has-text-centered" style={{paddingLeft: '0', paddingRight: '0', display: 'flex'}}>
                                            <div class="title is-centered" style={{margin: 'auto auto'}}>ES6</div>
                                        </div>
                                    </div>
                                    <div class="tile is-parent">
                                        <div class="tile is-child notification is-info box has-text-centered" style={{paddingLeft: '0', paddingRight: '0', display: 'flex'}}>
                                            <p class="title is-centered" style={{margin: 'auto auto'}}>React 16+</p>
                                        </div>
                                    </div>
                                    <div class="tile is-parent">
                                        <div class="tile is-child notification is-info box has-text-centered" style={{paddingLeft: '0', paddingRight: '0', display: 'flex'}}>
                                            <p class="title is-centered" style={{margin: 'auto auto'}}>HTML5</p>
                                        </div>
                                    </div>
                                    <div class="tile is-parent">
                                        <div class="tile is-child notification is-info box has-text-centered" style={{paddingLeft: '0', paddingRight: '0', display: 'flex'}}>
                                            <p class="title is-centered" style={{margin: 'auto auto'}}>CSS3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div class="tile is-parent">
                            <div class="tile is-child notification is-warning">
                                <p class="title">Tooling</p>
                                <div class="content">
                                    Includes:
                                        <ul>
                                            <li>
                                                <strong>Version Control:</strong> Git, Github
                                            </li>
                                            <li>
                                                <strong>Testing:</strong> Jest, Enzyme, Cypress
                                            </li>
                                            <li>
                                                <strong>Continuous Integration:</strong> CircleCI
                                            </li>
                                            <li>
                                                <strong>Database/Backend:</strong> Firebase, Netlify
                                            </li>
                                            <li>
                                                <strong>UI:</strong> Material-UI, Bulma
                                            </li>
                                            <li>
                                                <strong>JAMStack:</strong> Gatsby + Netlify
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section" id="portfolio">
                <div style={{minHeight: "1.5rem" }} class="is-hidden-mobile"></div>
                <div style={{minHeight: "0.75rem" }} class="is-hidden-tablet"></div>
                <div class="container">
                    <h1 class="title">
                        Portfolio
                    </h1>

                    <div class="columns is-multiline is-centered">
                        {portfolioProjects}
                    </div>
                </div>
            </section>

            <section class="section" id="resume">
                <div style={{minHeight: "1.5rem" }} class="is-hidden-mobile"></div>
                <div style={{minHeight: "0.75rem" }} class="is-hidden-tablet"></div>
                <div class="container">

                    <h1 class="title">
                        Resume
                    </h1>
                    <div class="columns is-centered is-multiline">
                        <nav class="level column is-12" style={{maxWidth: '1000px'}}>
                            <div class="columns is-centered" style={{width: '100%', margin: '0'}}>
                                <div class="column is-4">
                                    {/* <div style={{width: '0.375rem'}}></div> */}
                                    <div class="is-size-4 has-text-weight-bold" style={{width: '100%'}}>
                                        Education
                                    </div>
                                </div>
                                <div class="column is-7">
                                    <div style={{width: '100%'}}>
                                        <p class="is-size-6">
                                            <span class="has-text-weight-bold">Stanford Graduate School of Education</span><br />
                                            MA, Learning, Design, & Technology <span style={{color: 'hsl(0, 0%, 60%)'}}>(2015)</span>
                                        </p>
                                        {/* <p>
                                            Relevant coursework includes: CS 106B - Programming Abstractions, CS 298 - Seminar on Teaching Introductory Computer Science, CS 193P - iPhone and iPad Application Programming
                                        </p> */}
                                        <div style={{height: '0.75rem'}}></div>
                                        <p class="is-size-6">
                                            <span class="has-text-weight-bold">Yale University</span><br />
                                            BA, Political Science <span style={{color: 'hsl(0, 0%, 60%)'}}>(2006)</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <nav class="level column is-12" style={{maxWidth: '1000px'}}>
                            <div class="columns is-centered" style={{width: '100%', margin: '0'}}>
                                <div class="column is-4">
                                    {/* <div style={{width: '0.375rem'}}></div> */}
                                    <div class="is-size-4 has-text-weight-bold" style={{width: '100%'}}>
                                        Experience
                                    </div>
                                </div>
                                <div class="column is-7">
                                    <div style={{width: '100%'}}>
                                        <p class="is-size-6">
                                            <span class="has-text-weight-bold">Candidate for Burlingame City Council</span><br />
                                            <a href="https://www.MikeForBurlingame.com" target="_blank" rel="noopener noreferrer">www.MikeForBurlingame.com</a><br />
                                            <span style={{color: 'hsl(0, 0%, 60%)'}}>4/2019 - 11/2019</span>
                                            <br />
                                            Ran grassroots city council campaign challenging two incumbents over housing, transportation, and equity issues.
                                            Raised $25,000 and knocked more than 14,000 doors but fell short of beating the incumbent mayor.
                                        </p>
                                    </div>

                                    <div style={{height: '0.75rem'}}></div>

                                    <div style={{width: '100%'}}>
                                        <p class="is-size-6">
                                            <span class="has-text-weight-bold">Summit Public Schools - Director of Data / Consultant</span><br />
                                            <a href="https://www.SummitPS.org" target="_blank" rel="noopener noreferrer">www.SummitPS.org</a><br />
                                            <span style={{color: 'hsl(0, 0%, 60%)'}}>8/2015 - 6/2019</span>
                                            <br />
                                            Managed team of 6 to setup and operate numerous student data systems and
                                            provide data, reporting, scheduling, and operational support to 11 schools in CA and WA.
                                        </p>
                                    </div>

                                    <div style={{height: '0.75rem'}}></div>

                                    <div style={{width: '100%'}}>
                                        <p class="is-size-6">
                                            <span class="has-text-weight-bold">New Classrooms - SQL Developer / Sr. Mgr. of Student Progression</span><br />
                                            <a href="https://www.NewClassrooms.org" target="_blank" rel="noopener noreferrer">www.NewClassrooms.org</a><br />
                                            <span style={{color: 'hsl(0, 0%, 60%)'}}>7/2012 - 8/2014</span>
                                            <br />
                                            Developed and maintained large suite of data integrity tests for one of the country's earliest digital personalized learning programs
                                            and helped build tools for dynamically moving 6,000 students through the curriculum.
                                        </p>
                                    </div>

                                    <div style={{height: '0.75rem'}}></div>

                                    <div style={{width: '100%'}}>
                                        <p class="is-size-6">
                                            <span class="has-text-weight-bold">Teach For America - 5th Grade Math Teacher</span><br />
                                            <a href="https://www.TeachForAmerica.org" target="_blank" rel="noopener noreferrer">www.TeachForAmerica.org</a><br />
                                            <span style={{color: 'hsl(0, 0%, 60%)'}}>6/2010 - 6/2012</span>
                                            <br />
                                            Selected into a highly-competitive public service program and taught for 2 years in an under-served Brooklyn neighborhood.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </nav>

                        <nav class="level column is-12" style={{maxWidth: '1000px'}}>
                            <div class="columns is-centered" style={{width: '100%', margin: '0'}}>
                                <div class="column is-4">
                                    {/* <div style={{width: '0.375rem'}}></div> */}
                                    <div class="is-size-4 has-text-weight-bold" style={{width: '100%'}}>
                                        Links
                                    </div>
                                </div>
                                <div class="column is-7">
                                    <div style={{width: '100%'}}>
                                        <p class="is-size-6">
                                            <a href="/documents/Resume.pdf" target="_blank" rel="noopener noreferrer">
                                                <span class="has-text-weight-bold" style={{verticalAlign: 'middle'}}>Download Resume</span>
                                                <span class="icon" style={{verticalAlign: 'middle'}}>
                                                    <FontAwesomeIcon icon={faFilePdf} />
                                                </span>
                                            </a>
                                        </p>
                                        <div style={{height: '0.75rem'}}></div>
                                        <p class="is-size-6">
                                            <a href="https://www.linkedin.com/in/mikeldunham/" target="_blank" rel="noopener noreferrer">
                                                <span class="has-text-weight-bold" style={{verticalAlign: 'middle'}}>View LinkedIn</span>
                                                <span class="icon" style={{verticalAlign: 'middle'}}>
                                                    <FontAwesomeIcon icon={faLinkedin} />
                                                </span>
                                            </a>
                                        </p>
                                        <div style={{height: '0.75rem'}}></div>
                                        <p class="is-size-6">
                                            <a href="https://github.com/dunham-mike" target="_blank" rel="noopener noreferrer">
                                                <span class="has-text-weight-bold" style={{verticalAlign: 'middle'}}>View GitHub</span>
                                                <span class="icon" style={{verticalAlign: 'middle'}}>
                                                    <FontAwesomeIcon icon={faGithub} />
                                                </span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>

            <section class="section" id="contact">
                <div style={{minHeight: "1.5rem" }} class="is-hidden-mobile"></div>
                <div style={{minHeight: "0.75rem" }} class="is-hidden-tablet"></div>
                <div class="container">

                    <h1 class="title">
                        Contact Me
                    </h1>
                    <p>
                        <span>Currently available for full-time or contract work, either remote or local to the Bay Area: </span>
                        <a href="mailto:mldunham@gmail.com">mldunham@gmail.com</a>
                    </p>
                </div>
            </section>

            <div class={"modal"  + (isAppPreviewActive ? " is-active" : "" )}>
                <div class="modal-background" onClick={closeAppPreview}></div>
                <div 
                    class="modal-card"
                    style={{minWidth: '80%'}}
                >
                    <header class="modal-card-head">
                        <p class="modal-card-title">
                            {activeAppPreviewName}
                        </p>
                        <button class="delete" aria-label="close" onClick={closeAppPreview}></button>
                    </header>
                    <section class="modal-card-body">
                        <img 
                            src={activeAppPreviewImageUrl} style={{width: '100%'}}
                            style={{boxShadow: '0 0.3em 1em -0.125em rgba(10, 10, 10, 0.2)'}}
                        />
                    </section>
                </div>
            </div>

            <footer class="footer">
                <div class="content" style={{display: 'flex', flexDirection: 'column'}}>
                    <p style={{display: 'flex', margin: '0 auto'}}>
                        <span class="is-vcentered">Made with</span>
                        <span class="icon is-vcentered has-text-danger">
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <span class="is-vcentered">in Burlingame, CA.</span>
                    </p>
                    <br />
                    <p style={{margin: '0 auto'}}>
                        © Mike Dunham {new Date().getFullYear()}
                    </p>
                </div>
            </footer>

        </Layout>
    )
}

export const query = graphql`
    query {
        __typename
        sitePage {
        id
        }
        allMarkdownRemark(filter: {frontmatter: {app_url: {ne: null}}}) {
        edges {
            node {
            fields {
                slug
            }
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
        nodes {
            id
        }
        }
    }
`