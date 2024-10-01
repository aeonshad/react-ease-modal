import React from 'react';
import { ReactComponent as CloseIcon } from './x.svg';
export const Modal = ({
  open,
  children,
  className
}) => open ? /*#__PURE__*/React.createElement("div", {
  className: className
}, children) : null;
export const ModalContent = ({
  children,
  className
}) => /*#__PURE__*/React.createElement("div", {
  className: className
}, children);
export const ModalClose = ({
  onClose,
  className
}) => /*#__PURE__*/React.createElement(CloseIcon, {
  className: className,
  onClick: onClose
});
export const ModalHeader = ({
  children,
  className
}) => /*#__PURE__*/React.createElement("div", {
  className: className
}, children);
export const ModalTitle = ({
  children,
  className
}) => /*#__PURE__*/React.createElement("h2", {
  className: className
}, children);
export const ModalDescription = ({
  children,
  className
}) => /*#__PURE__*/React.createElement("p", {
  className: className
}, children);
export const ModalFooter = ({
  children,
  className
}) => /*#__PURE__*/React.createElement("div", {
  className: className
}, children);