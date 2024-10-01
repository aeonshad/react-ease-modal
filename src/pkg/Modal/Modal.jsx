import { ReactComponent as CloseIcon } from './x.svg';
export const Modal = ({ open, children }) => (open ? <div>{children}</div> : null);
export const ModalContent = ({ onClose, children }) => (
    <div>
        {children}
        <CloseIcon onClick={onClose} />
    </div>
);
export const ModalHeader = ({ children }) => <div>{children}</div>;
export const ModalTitle = ({ children }) => <h2>{children}</h2>;
export const ModalDescription = ({ children }) => <p>{children}</p>;
export const ModalFooter = ({ children }) => <div>{children}</div>;
