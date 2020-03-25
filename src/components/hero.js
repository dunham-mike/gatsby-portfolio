import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faTrain, faLandmark, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export const hero = () => {
    return(
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="is-size-2 has-text-weight-bold">
                        Mike Dunham
                    </h1>
                    <h2 class="is-size-4">
                        Frontend engineer with a background in education, data, and politics
                    </h2>
                    <div style={{minHeight: "2.25rem" }} class="is-hidden-tablet"></div>
                    <div style={{minHeight: "1.5rem" }} class="is-hidden-mobile"></div>
                    <div class="is-size-5">
                        I specialize in <span class="has-text-weight-bold has-text-danger">
                            React</span> and <span class="has-text-weight-bold has-text-success">
                                JavaScript</span> and am particularly interested in solving problems around 
                        <span style={{ whiteSpace: 'nowrap'}}>
                            <span> </span>
                            <span class="icon">
                                <FontAwesomeIcon icon={faBuilding} />
                            </span>
                            <span> </span>
                            <span class="has-text-weight-bold">housing,</span>
                        </span>

                        <span style={{ whiteSpace: 'nowrap'}}>
                            <span> </span>
                            <span class="icon">
                                <FontAwesomeIcon icon={faTrain} />
                            </span>
                            <span> </span>
                            <span class="has-text-weight-bold">transportation,</span> 
                        </span>
                        
                        <span style={{ whiteSpace: 'nowrap'}}>
                            <span> </span>
                            <span class="icon">
                                <FontAwesomeIcon icon={faLandmark} />
                            </span>
                            <span> </span>
                            <span class="has-text-weight-bold">politics,</span>
                        </span>
                        <span> and&nbsp;&nbsp;</span>
                        <span style={{ whiteSpace: 'nowrap'}}>
                            <span class="icon">
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </span>
                            <span> </span>
                            <span class="has-text-weight-bold">education</span>
                        </span>
            
                        . Located in the <span class="has-text-weight-bold has-text-info">Bay Area</span>.
                    </div>
                </div>
            </div>
        </section>
    );
}

export default hero;