import React from 'react';
import Modal from 'react-modal';

const AddModal = (props) => (
    <Modal
        
        isOpen={!!props.isOpen}
        ariaHideApp={false}
        onRequestClose={props.closeModal}
        closeTimeoutMS={200}
        className="modal"
        
    
    >
        <div>
        
        <h2>Add a custom wordlist</h2>
        <form onSubmit={props.handleAddList}>
        <div className="modal__input">
            <h3>Enter the name</h3>
            <input type="text" onChange={props.handleNameChange}/>
        </div>
        <button type="submit" name="listName" className="button__add">ADD</button>
        </form>
        </div>
    </Modal>
);

export default AddModal;