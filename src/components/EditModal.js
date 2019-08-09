import React from 'react';
import Modal from 'react-modal';

const EditModal = (props) => (
    <Modal
        isOpen={!!props.isOpen}
        ariaHideApp={false}
        onRequestClose={props.closeModal}
        closeTimeoutMS={200}
        className="modal"
        
    
    >
    <h1>{props.title}</h1>
    <button className="button__add button__edit"onClick={props.edit}>Edit</button>
    <button className="button__add" onClick={props.remove}>Delete</button>
    
    </Modal>

);

export default EditModal;