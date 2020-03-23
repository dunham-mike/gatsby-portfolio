import React from 'react';

import portfolioScreenshot from "../../static/images/screenshot.jpg";

export const portfolioProject = (props) => {
    return(
        <article class="panel is-primary">
            <p class="panel-heading">
                {props.projectInfo.title}
            </p>
            <div class="panel-block">
                <img src={props.projectInfo.screenshot} style={{width: '100%'}} class="is-hidden-tablet" />
                <img src={props.projectInfo.screenshot} style={{width: '100%', padding: '0.75rem'}} class="is-hidden-mobile" />
            </div>
            <div class="panel-block" style={{minHeight: '4rem'}}>
                {props.projectInfo.description}
            </div>
            <div class="panel-block" style={{minHeight: '4rem'}}>
                {props.projectInfo.technologies}
            </div>
            <div class="panel-block">
                <a href={props.projectInfo.app_url} target="_blank" rel="noopener noreferrer" class="button is-link is-outlined is-fullwidth has-text-weight-bold">
                    See the live web app
                </a>
            </div>
            <div class="panel-block">
                <a href={props.projectInfo.github_url} target="_blank" rel="noopener noreferrer" class="button is-success is-outlined is-fullwidth has-text-weight-bold">
                    See the source code on GitHub
                </a>
            </div>
        </article>
    );
}

export default portfolioProject;