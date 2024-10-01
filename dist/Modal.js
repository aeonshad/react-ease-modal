import React from 'react';
import { ReactComponent as CloseIcon } from './x.svg';
export const Modal = ({
  open,
  children,
  className,
  ariaLabelledBy,
  ariaDescribedBy
}) => open ? /*#__PURE__*/React.createElement("div", {
  className: className,
  role: "dialog",
  "aria-modal": "true",
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  tabIndex: "-1"
}, children) : null;
export const ModalContent = ({
  children,
  className,
  ariaLabel
}) => /*#__PURE__*/React.createElement("div", {
  className: className,
  "aria-label": ariaLabel
}, children);
export const ModalClose = ({
  onClose,
  className,
  ariaLabel
}) => /*#__PURE__*/React.createElement(CloseIcon, {
  className: className,
  "aria-label": ariaLabel,
  onClick: onClose
});
export const ModalHeader = ({
  children,
  className,
  ariaLabel
}) => /*#__PURE__*/React.createElement("div", {
  className: className,
  "aria-label": ariaLabel
}, children);
export const ModalTitle = ({
  children,
  className,
  id
}) => /*#__PURE__*/React.createElement("h2", {
  className: className,
  id: id
}, children);
export const ModalDescription = ({
  children,
  className,
  id
}) => /*#__PURE__*/React.createElement("p", {
  className: className,
  id: id
}, children);
export const ModalFooter = ({
  children,
  className,
  ariaLabel
}) => /*#__PURE__*/React.createElement("div", {
  className: className,
  "aria-label": ariaLabel
}, children);