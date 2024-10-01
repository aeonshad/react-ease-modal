import { useState } from 'react';
import { Modal, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from './pkg/Modal/Modal';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal open={isOpen}>
                <ModalContent onClose={() => setIsOpen(false)}>
                    <ModalHeader>
                        <ModalTitle>Title</ModalTitle>
                        <ModalDescription>Description</ModalDescription>
                    </ModalHeader>
                    <ModalFooter>
                        <button onClick={() => setIsOpen(false)}>Close Modal</button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </main>
    );
}

export default App;

