import React from 'react';

import portfolioScreenshot from "../../static/images/screenshot.jpg";

export const portfolioProject = (props) => {
    return(
        <article class="panel is-primary">
            <p class="panel-heading">
                Deliberate Sprints
            </p>
            <div class="panel-block">
                <img src={portfolioScreenshot} style={{width: '100%'}} class="is-hidden-tablet" />
                <img src={portfolioScreenshot} style={{width: '100%', padding: '0.75rem'}} class="is-hidden-mobile" />
            </div>
            <div class="panel-block">
                A CRUD sprint tracking tool that lets a user organize projects and sprints and monitor their progress over time.
            </div>
            <div class="panel-block">
                Technologies: React, Jest/Enzyme, Cypress, Firebase
            </div>
            <div class="panel-block">
                <a href="https://deliberate-sprints.web.app/" target="_blank" rel="noopener noreferrer" class="button is-link is-outlined is-fullwidth has-text-weight-bold">
                    See the live web app
                </a>
            </div>
            <div class="panel-block">
                <a href="https://github.com/dunham-mike/sprint-tracker" target="_blank" rel="noopener noreferrer" class="button is-success is-outlined is-fullwidth has-text-weight-bold">
                    See the source code on GitHub
                </a>
            </div>
        </article>
    );
}

export default portfolioProject;