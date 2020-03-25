// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/use-static-query/
//  */

// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import { createGlobalStyle } from "styled-components"

// import Header from "./header"
// import "./layout.css"

// import { Link } from "gatsby"

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

// const GlobalStyle = createGlobalStyle`
//   body {
//     color: ${props => (props.theme === "purple" ? "purple" : "white")};
//   }
// `

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <GlobalStyle theme="purple" />
//       <Header siteTitle={data.site.siteMetadata.title}>
//         <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
//           <h3 style={{ display: `inline` }}>MySweetSite</h3>
//         </Link>
//         <ul style={{ listStyle: `none`, float: `right` }}>
//           <ListLink to="/">Home</ListLink>
//           <ListLink to="/about/">About</ListLink>
//           <ListLink to="/contact/">Contact</ListLink>
//         </ul>
//       </Header>
//       <div
//         style={{
//           margin: `3rem auto`,
//           maxWidth: 650,
//           padding: `0 1rem`,
//         }}
//       >
//         <h3>MySweetSite</h3>
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
