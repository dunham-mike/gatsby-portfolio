import React from "react"
import { css } from "@emotion/core"
// import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

import { useStaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => {
    const data = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    )
    return (
        <div
            css={css`
            margin: 0 auto;
            max-width: 700px;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
            `}
        >
            <Link to={`/pandaindex`}>
            <h3
                css={css`
                margin-bottom: ${rhythm(2)};
                display: inline-block;
                font-style: normal;
                `}
            >
                {data.site.siteMetadata.title}
            </h3>
            </Link>
            <Link
            to={`/pandaabout`}
            css={css`
                float: right;
            `}
            >
            About
            </Link>
            {children}
        </div>
    )
};