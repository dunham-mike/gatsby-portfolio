import React from 'react';

export const skills = () => {
    return(
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
                            <div class="tile is-child notification is-skills1 box">
                                <p class="title">JavaScript, React, and Node.js</p>
                                <p class="subtitle">Including Redux, Gatsby, MongoDB, and Express</p>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile is-block-touch is-block-desktop-only">
                                <div class="tile is-parent">
                                    <div class="tile is-child notification is-skills2 box has-text-centered" style={{paddingLeft: '0', paddingRight: '0', display: 'flex'}}>
                                        <div class="title is-centered" style={{margin: 'auto auto'}}>ES6</div>
                                    </div>
                                </div>
                                <div class="tile is-parent">
                                    <div class="tile is-child notification is-skills2 box has-text-centered" style={{paddingLeft: '0', paddingRight: '0', display: 'flex'}}>
                                        <p class="title is-centered" style={{margin: 'auto auto'}}>React<br/>16+</p>
                                    </div>
                                </div>
                                <div class="tile is-parent">
                                    <div class="tile is-child notification is-skills2 box has-text-centered" style={{paddingLeft: '0', paddingRight: '0', display: 'flex'}}>
                                        <p class="title is-centered" style={{margin: 'auto auto'}}>Node.js 12+</p>
                                    </div>
                                </div>
                                <div class="tile is-parent">
                                    <div class="tile is-child notification is-skills2 box has-text-centered" style={{paddingLeft: '0', paddingRight: '0', display: 'flex'}}>
                                        <p class="title is-centered" style={{margin: 'auto auto'}}>HTML5</p>
                                    </div>
                                </div>
                                <div class="tile is-parent">
                                    <div class="tile is-child notification is-skills2 box has-text-centered" style={{paddingLeft: '0', paddingRight: '0', display: 'flex'}}>
                                        <p class="title is-centered" style={{margin: 'auto auto'}}>CSS3</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div class="tile is-parent">
                        <div class="tile is-child notification is-skills3">
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
                                            <strong>Database/Backend:</strong> MongoDB, Firebase, Heroku, Netlify
                                        </li>
                                        <li>
                                            <strong>UI:</strong> Material-UI, Bulma
                                        </li>
                                        <li>
                                            <strong>JAMStack:</strong> Gatsby + NetlifyCMS
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default skills;