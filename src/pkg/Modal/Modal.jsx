import React from 'react';
import { ReactComponent as CloseIcon } from './x.svg';

export const Modal = ({ open, children, className, ariaLabelledBy, ariaDescribedBy }) =>
    open && (
        <div className={className} role="dialog" aria-modal="true" aria-labelledby={ariaLabelledBy} aria-describedby={ariaDescribedBy} tabIndex="-1">
            {children}
        </div>
    );

export const ModalContent = ({ children, className, ariaLabel }) => (
    <div className={className} aria-label={ariaLabel}>
        {children}
    </div>
);

export const ModalClose = ({ onClose, className, ariaLabel }) => <CloseIcon className={className} aria-label={ariaLabel} role="button" onClick={onClose} />;

export const ModalHeader = ({ children, className, ariaLabel }) => (
    <div className={className} aria-label={ariaLabel}>
        {children}
    </div>
);

export const ModalTitle = ({ children, className, id }) => (
    <h2 className={className} id={id}>
        {children}
    </h2>
);

export const ModalDescription = ({ children, className, id }) => (
    <p className={className} id={id}>
        {children}
    </p>
);

export const ModalFooter = ({ children, className, ariaLabel }) => (
    <div className={className} aria-label={ariaLabel}>
        {children}
    </div>
);
