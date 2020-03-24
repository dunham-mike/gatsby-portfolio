import React from 'react';
// rgba(10, 10, 10, 0.1)
export const portfolioProject = (props) => {
    return(
        <article class="panel is-primary">
            <p class="panel-heading">
                {props.projectInfo.title}
            </p>
            <div class="panel-block" style={{padding: '0.75rem 0.75rem'}}>
                <img 
                    src={props.projectInfo.screenshot} style={{width: '100%'}} class="is-hidden-tablet" 
                    style={{boxShadow: '0 0.3em 1em -0.125em rgba(10, 10, 10, 0.2)'}}
                />
                <img 
                    src={props.projectInfo.screenshot} style={{width: '100%'}} class="is-hidden-mobile" 
                    style={{boxShadow: '0 0.3em 1em -0.125em rgba(10, 10, 10, 0.2)'}}
                />
            </div>
            <div class="panel-block" style={{minHeight: '4rem'}}>
                {props.projectInfo.description}
            </div>
            <div class="panel-block" style={{minHeight: '4rem'}}>
                {props.projectInfo.technologies}
            </div>
            <div class="panel-block" style={{padding: '0'}}>
                <div class="columns is-centered is-hidden-touch is-hidden-desktop-only" style={{width: '100%', margin: 'auto'}}>
                    <div class="column" style={{paddingRight: '0'}}>
                        <a href={props.projectInfo.app_url} target="_blank" rel="noopener noreferrer" class="button is-danger is-outlined is-fullwidth has-text-weight-bold">
                            App preview
                        </a>
                    </div>
                    <div class="column">
                        <a href={props.projectInfo.app_url} target="_blank" rel="noopener noreferrer" class="button is-link is-outlined is-fullwidth has-text-weight-bold">
                            Live web app
                        </a>
                    </div>
                    <div class="column"  style={{paddingLeft: '0'}}>
                        <a href={props.projectInfo.github_url} target="_blank" rel="noopener noreferrer" class="button is-success is-outlined is-fullwidth has-text-weight-bold">
                            Source code on GitHub
                        </a>
                    </div>
                </div>
                <div class="is-hidden-widescreen" style={{width: '100%', padding: '0.75rem'}}>
                    <a href={props.projectInfo.app_url} target="_blank" rel="noopener noreferrer" 
                        class="button is-danger is-outlined is-fullwidth has-text-weight-bold"
                        style={{marginBottom: '0.75rem'}}
                    >
                        App preview
                    </a>
                    <a href={props.projectInfo.app_url} target="_blank" rel="noopener noreferrer" 
                        class="button is-link is-outlined is-fullwidth has-text-weight-bold"
                        style={{marginBottom: '0.75rem'}}
                    >
                        Live web app
                    </a>
                    <a href={props.projectInfo.github_url} target="_blank" rel="noopener noreferrer" class="button is-success is-outlined is-fullwidth has-text-weight-bold">
                        Source code on GitHub
                    </a>
                </div>
            </div>
            {/* <div class="panel-block">
                <a href={props.projectInfo.app_url} target="_blank" rel="noopener noreferrer" class="button is-link is-outlined is-fullwidth has-text-weight-bold">
                    See the live web app
                </a>
            </div>
            <div class="panel-block">
                <a href={props.projectInfo.github_url} target="_blank" rel="noopener noreferrer" class="button is-success is-outlined is-fullwidth has-text-weight-bold">
                    See the source code on GitHub
                </a>
            </div> */}
        </article>
    );
}

export default portfolioProject;