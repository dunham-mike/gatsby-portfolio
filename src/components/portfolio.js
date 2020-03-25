import React from 'react';

export const portfolio = (props) => {
    return(
        <section class="section" id="portfolio">
            <div style={{minHeight: "1.5rem" }} class="is-hidden-mobile"></div>
            <div style={{minHeight: "0.75rem" }} class="is-hidden-tablet"></div>
            <div class="container">
                <h1 class="title">
                    Portfolio
                </h1>

                <div class="columns is-multiline is-centered">
                    {props.portfolioProjects}
                </div>
            </div>
        </section>
    );
}

export default portfolio;