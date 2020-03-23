import React from 'react';

import portfolioScreenshot from "../../static/images/screenshot.jpg";

export const portfolioProject = (props) => {
    return(
        <article class="panel is-primary">
            <p class="panel-heading">
                Deliberate Sprints
            </p>
            <div class="panel-block">
                <img src={portfolioScreenshot} style={{width: '100%', maxWidth: '500px', margin: '0.75rem auto'}}/>
            </div>
            <div class="panel-block">
                A CRUD sprint tracking tool that lets a user organize projects and sprints and monitor their progress over time.
            </div>
            <div class="panel-block">
                Technologies: React, Jest/Enzyme, Cypress, Firebase
            </div>
            <div class="panel-block">
                <button class="button is-link is-outlined is-fullwidth has-text-weight-bold">
                    See the live web app
                </button>
            </div>
        </article>
    );
}

export default portfolioProject;