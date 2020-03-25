import React, { useState } from "react"
// import { css } from "@emotion/core"
// import { Link } from "gatsby"
// import { rhythm } from "../utils/typography"
// import styled from 'styled-components'
import BodyClassName from 'react-body-classname';

import { useStaticQuery, Link, graphql } from "gatsby"

// const BurgerLabel = styled(label)`
//     display: none;
//     :checked ~ .nav-menu {
//         display: block;
//     }
// `

export default ({ children }) => {

    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    const toggleHamburger = () => {
        setIsHamburgerActive(!isHamburgerActive);
    }

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
        <React.Fragment>
            <nav class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
                <BodyClassName className="has-navbar-fixed-top" />
                <div class="navbar-brand">
                    <Link class="navbar-item has-text-info has-text-weight-bold is-size-5" to="#top">
                        {data.site.siteMetadata.title}
                    </Link>
                    <div 
                        class={"navbar-burger burger" + (isHamburgerActive ? " is-active" : "")} 
                        aria-label="menu" 
                        aria-expanded="false" 
                        data-target="navbarBasicExample"
                        role="button"
                        tabIndex={0}
                        onClick={() => toggleHamburger()}
                        onKeyDown={() => toggleHamburger()}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>
                <div id="navbarBasicExample" class={"navbar-menu" + (isHamburgerActive ? " is-active" : "")}>
                    <div class="navbar-end">
                        <Link class="navbar-item" to="#skills" onClick={isHamburgerActive ? () => toggleHamburger() : null}>
                            Skills
                        </Link>
                        <Link class="navbar-item" to="#portfolio" onClick={isHamburgerActive ? () => toggleHamburger() : null}>
                            Portfolio
                        </Link>
                        <Link class="navbar-item" to="#resume" onClick={isHamburgerActive ? () => toggleHamburger() : null}>
                            Resume
                        </Link>
                        <div class="navbar-item">
                            <Link class="button is-primary has-text-weight-bold" to="#contact" onClick={isHamburgerActive ? () => toggleHamburger() : null}>
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </React.Fragment>
    )
};