import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export const footer = () => {
    return(
        <footer class="footer">
            <div class="content" style={{display: 'flex', flexDirection: 'column'}}>
                <p style={{display: 'flex', margin: '0 auto'}}>
                    <span class="is-vcentered">Made with</span>
                    <span class="icon is-vcentered has-text-danger">
                        <FontAwesomeIcon icon={faHeart} />
                    </span>
                    <span class="is-vcentered">in Burlingame, CA.</span>
                </p>
                <br />
                <p style={{margin: '0 auto'}}>
                    © Mike Dunham {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default footer;