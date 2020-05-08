import React from 'react';

export const appPreview = (props) => {
    return(
        <div class={"modal"  + (props.isAppPreviewActive ? " is-active" : "" )}>
            <div 
                class="modal-background" 
                onClick={props.closeAppPreview}
                onKeyDown={props.closeAppPreview}
                role="button"
                tabIndex={0}
            ></div>
            <div 
                class="modal-card"
                style={{minWidth: '80%', minHeight: '41.85%'}}
            >
                <header class="modal-card-head has-background-portfolio1">
                    <p class="modal-card-title has-text-white">
                        {props.activeAppPreviewName}
                    </p>
                    <button class="delete" aria-label="close" onClick={props.closeAppPreview}></button>
                </header>
                <section class="modal-card-body">
                    <img 
                        src={props.activeAppPreviewImageUrl}
                        alt="App Preview"
                        style={{width: '100%', boxShadow: '0 0.3em 1em -0.125em rgba(10, 10, 10, 0.2)'}}
                    />
                </section>
            </div>
        </div>
    );
}

export default appPreview;