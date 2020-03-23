import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/pandalayout"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faBuilding, faTrain, faLandmark, faGraduationCap } from '@fortawesome/free-solid-svg-icons'


import './styles.scss';
import PortfolioProject from '../components/portfolioProject';


export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="is-size-2 has-text-weight-bold">
                        Mike Dunham
                    </h1>
                    <h2 class="is-size-4">
                        Frontend engineer with a background in education, data, and politics
                    </h2>
                    <br />
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
                        <span> and </span>
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
        <br id="skills"/>
        <section class="section">
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
                        <div class="tile is-child notification is-light is-warning">
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
        <br id="portfolio"/>
        <section class="section">
            <div class="container">
                <h1 class="title">
                    Portfolio
                </h1>

                <div class="columns is-multiline is-centered">
                    <div class="column is-half">
                        <PortfolioProject />
                    </div>
                    <div class="column is-half">
                        <PortfolioProject />
                    </div>
                    <div class="column is-half">
                        <PortfolioProject />
                    </div>
                </div>

                {/* <div class="tile is-ancestor">
                    <div class="tile is-vertical is-8">
                        <div class="tile">
                            <div class="tile is-parent is-vertical">
                                <div class="tile is-child notification is-primary">
                                    <p class="title">Vertical...</p>
                                    <p class="subtitle">Top tile</p>
                                </div>
                                <article class="tile is-child notification is-warning">
                                    <p class="title">...tiles</p>
                                    <p class="subtitle">Bottom tile</p>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-info">
                                    <p class="title">Middle tile</p>
                                    <p class="subtitle">With an image</p>
                                </article>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-danger">
                                <p class="title">Wide tile</p>
                                    <p class="subtitle">Aligned with the right tile</p>
                                    <div class="content">
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-success">
                            <div class="content">
                                <p class="title">Tall tile</p>
                                <p class="subtitle">With even more content</p>
                                <div class="content">
                                    Content
                                </div>
                            </div>
                        </article>
                    </div>
                </div> */}


            </div>
        </section>
        <br id="resume"/>
        <section class="section">
            <div class="container">
                <h1 class="title">
                    Resume
                </h1>
                <p class="subtitle">
                    My first website with <strong>Bulma</strong>!
                </p>
            </div>
        </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`