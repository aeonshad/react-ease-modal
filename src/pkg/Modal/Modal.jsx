import React from 'react';
import { ReactComponent as CloseIcon } from './x.svg';

export const Modal = ({ open, children, className }) => (open ? <div className={className}>{children}</div> : null);

export const ModalContent = ({ children, className }) => <div className={className}>{children}</div>;

export const ModalClose = ({ onClose, className }) => <CloseIcon className={className} onClick={onClose} />;

export const ModalHeader = ({ children, className }) => <div className={className}>{children}</div>;

export const ModalTitle = ({ children, className }) => <h2 className={className}>{children}</h2>;

export const ModalDescription = ({ children, className }) => <p className={className}>{children}</p>;

export const ModalFooter = ({ children, className }) => <div className={className}>{children}</div>;
