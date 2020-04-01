import React, { useState } from "react"
import BodyClassName from 'react-body-classname';

import { useStaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => {

    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    const toggleHamburger = () => {
        setIsHamburgerActive(!isHamburgerActive);
    }

    if (typeof window !== "undefined") {
        // eslint-disable-next-line global-require
        require("smooth-scroll")('a[href*="#"]')
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

    const siteTitleArray = data.site.siteMetadata.title.split(" ");

    return (
        <React.Fragment>
            <nav class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
                <BodyClassName className="has-navbar-fixed-top" />
                <div class="navbar-brand">
                    <Link class="navbar-item has-text-info has-text-weight-bold is-size-5 is-inline" to="#top">
                        <span>{siteTitleArray[0] + " " + siteTitleArray[1]}&nbsp;</span>
                        <span style={{verticalAlign: '1px'}}>{siteTitleArray[2]}</span>
                        <span>&nbsp;{siteTitleArray[3] + " " + siteTitleArray[4]}</span>
                    </Link>
                    <div 
                        class={"navbar-burger burger" + (isHamburgerActive ? " is-active" : "")} 
                        aria-label="menu" 
                        aria-expanded="false" 
                        data-target="navbarBasicExample"
                        role="button"
                        tabIndex={0}
                        onClick={toggleHamburger}
                        onKeyDown={toggleHamburger}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>
                <div id="navbarBasicExample" class={"navbar-menu" + (isHamburgerActive ? " is-active" : "")}>
                    <div class="navbar-end">
                        <Link class="navbar-item" to="#skills" onClick={isHamburgerActive ? toggleHamburger : null}>
                            Skills
                        </Link>
                        <Link class="navbar-item" to="#portfolio" onClick={isHamburgerActive ? toggleHamburger : null}>
                            Portfolio
                        </Link>
                        <Link class="navbar-item" to="#resume" onClick={isHamburgerActive ? toggleHamburger : null}>
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