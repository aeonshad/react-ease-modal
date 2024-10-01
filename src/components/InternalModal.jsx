import { Modal, ModalContent, ModalClose, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from 'react-ease-modal';

function InternalModal({ isOpen, setIsOpen }) {
    return (
        <Modal className="modal-overlay" open={isOpen} ariaLabelledBy="modal-title" ariaDescribedBy="modal-description">
            <ModalContent className="modal-container">
                <ModalClose className="modal-icon" onClose={() => setIsOpen(false)} ariaLabel="Close modal" />
                <img className="modal-hero" src="./hero.svg" alt="hero" />
                <ModalHeader className="modal-header">
                    <ModalTitle className="modal-title" id="modal-title">
                        Welcome to React Ease Modal
                    </ModalTitle>
                    <ModalDescription className="modal-description" id="modal-description">
                        You are ready to use my component!
                    </ModalDescription>
                </ModalHeader>
                <ModalFooter className="modal-footer">
                    <button className="btn btn-secondary" onClick={() => setIsOpen(false)}>
                        Close
                    </button>
                    <a href="https://www.npmjs.com/package/react-ease-modal" target="_blank" rel="noopener noreferrer" className="btn btn-link">
                        See NPM page
                    </a>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
export default InternalModal;
