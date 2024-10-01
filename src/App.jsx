import { useState } from 'react';
import { Modal, ModalContent, ModalClose, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from './pkg/Modal/Modal';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main>
            <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
                Open Modal
            </button>
            <Modal className="modal-overlay" open={isOpen}>
                <ModalContent className="modal-container">
                    <ModalClose className="modal-icon" onClose={() => setIsOpen(false)} />
                    <img className="modal-hero" src="./hero.svg" alt="hero" />
                    <ModalHeader className="modal-header">
                        <ModalTitle className="modal-title">Welcome to React Ease Modal</ModalTitle>
                        <ModalDescription className="modal-description">You are ready to use my component!</ModalDescription>
                    </ModalHeader>
                    <ModalFooter className="modal-footer">
                        <button className="btn btn-secondary" onClick={() => setIsOpen(false)}>
                            Close Modal
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </main>
    );
}

export default App;

