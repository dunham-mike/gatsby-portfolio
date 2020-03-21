import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Link to="/contact">Contact</Link>
    <SEO title="Home" />
    <h1>Mike Dunham</h1>
    <p>Frontend engineer.</p>
    <p>React. JavaScript.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Link to="/page-2/">Go to page 2</Link>
    <div>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </div>
  </Layout>
)

export default IndexPage
