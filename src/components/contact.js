import React from 'react';

export const contact = () => {
    return(
        <section class="section" id="contact">
            <div style={{minHeight: "1.5rem" }} class="is-hidden-mobile"></div>
            <div style={{minHeight: "0.75rem" }} class="is-hidden-tablet"></div>
            <div class="container">

                <h1 class="title">
                    Contact Me
                </h1>
                <p>
                    <span>Currently available for full-time or contract work, either remote or (post-pandemic) local to the Bay Area: </span>
                    <a href="mailto:mldunham@gmail.com">mldunham@gmail.com</a>
                </p>
            </div>
        </section>
    );
}

export default contact;