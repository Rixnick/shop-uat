import React from 'react';

const modal = props => (
    <div className="modal">
        <section className="modal__header">
            <h1>{props.title}</h1>
            {props.canCancel && 
                (<a  onClick={props.onCancel}
                >
                     <span className="ti-close"></span>
                </a>)}
        </section>
        <section className="modal__content">
            {props.children}
        </section>
        {/* <section className="modal__action">
            {props.canCancel && 
                (<button 
                    className="btn__cancel" 
                    onClick={props.onCancel}
                >Cancel</button>)}
            {props.canConfirm && 
             (   <button 
                    className="btn__confirm" 
                    onClick={props.onConfirm}
                >Confirm</button>)}
        </section> */}
    </div>
)
export default modal;