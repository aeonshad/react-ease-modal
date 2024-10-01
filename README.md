# React Ease Modal

<a href='https://github.com/aeonshad/react-ease-modal/blob/main/README.fr.md'><img alt="Static Badge" src="https://img.shields.io/badge/version-French%7CFran%C3%A7ais-%2322802b?style=flat&logo=readme&logoColor=%23b3bd68&label=Readme"></a>
<a href='https://fr.react.dev/'><img alt="Static Badge" src="https://img.shields.io/badge/version-18.3.1-blue?style=flat&logo=React&label=React"></a>
<a href='https://www.npmjs.com/'><img alt="Static Badge" src="https://img.shields.io/badge/version-10.8.2-red?style=flat&logo=NPM&label=NPM"></a>
<a href='https://github.com/aeonshad/react-ease-modal/blob/main/LICENSE'><img alt="Static Badge" src="https://img.shields.io/badge/version-MIT-%23cfb232?style=flat&logoColor=%23b3bd68&label=License"></a>

A simple, modular, and customizable modal component for React applications. Compatible with Tailwind CSS, it provides flexible modal management with various styling options.

## Table of Contents

-   [Installation](#installation)
-   [Compatibility and Dependencies](#compatibility-and-dependencies)
-   [Usage](#usage)
-   [Properties](#properties)
-   [Styles](#styles)
-   [License](#license)

## Installation

To install `react-ease-modal` in your React project, run one of the following commands:

```bash
npm install react-ease-modal
```

or

```bash
yarn add react-ease-modal
```

## Compatibility and Dependencies

### Dependencies

`react-ease-modal` does not rely on any external libraries to function.

### Compatibility

-   **React**: Compatible with React 17+ and React 18+.
-   **Tailwind CSS (optional)**: While Tailwind is not required, you can use it to style the modal.
-   **CSS**: You can use your own CSS classes for additional customization.

## Usage

To use `react-ease-modal` and its subcomponents, import them into your React file and integrate them into your JSX:

```jsx
import { useState } from 'react';
import { Modal, ModalContent, ModalClose, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from 'react-ease-modal';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main>
            <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
                Open Modal
            </button>
            <Modal open={isOpen}>
                <ModalContent>
                    <ModalClose onClose={() => setIsOpen(false)} />
                    <ModalHeader>
                        <ModalTitle>Modal Title</ModalTitle>
                        <ModalDescription>This is the modal content.</ModalDescription>
                    </ModalHeader>
                    <ModalFooter>
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
```

## Properties

### Modal

| Property    | Type        | Required | Description                                 |
| ----------- | ----------- | -------- | ------------------------------------------- |
| `className` | `string`    | Optional | Custom CSS class(es) to apply to the modal. |
| `open`      | `boolean`   | Yes      | Indicates if the modal is open or closed.   |
| `children`  | `ReactNode` | Yes      | Content to display inside the modal.        |

### ModalContent

| Property    | Type        | Required | Description                                         |
| ----------- | ----------- | -------- | --------------------------------------------------- |
| `className` | `string`    | Optional | Custom CSS class(es) to apply to the modal content. |
| `children`  | `ReactNode` | Yes      | Content to display inside the modal.                |

### ModalClose

| Property    | Type       | Required | Description                                            |
| ----------- | ---------- | -------- | ------------------------------------------------------ |
| `className` | `string`   | Optional | Custom CSS class(es) to apply to the modal close icon. |
| `onClose`   | `function` | Yes      | Callback function triggered to close the modal.        |

### ModalHeader

| Property    | Type        | Required | Description                                        |
| ----------- | ----------- | -------- | -------------------------------------------------- |
| `className` | `string`    | Optional | Custom CSS class(es) to apply to the modal header. |
| `children`  | `ReactNode` | Yes      | Content to display inside the modal header.        |

### ModalTitle

| Property    | Type        | Required | Description                                       |
| ----------- | ----------- | -------- | ------------------------------------------------- |
| `className` | `string`    | Optional | Custom CSS class(es) to apply to the modal title. |
| `children`  | `ReactNode` | Yes      | Title to display inside the modal.                |

### ModalDescription

| Property    | Type        | Required | Description                                             |
| ----------- | ----------- | -------- | ------------------------------------------------------- |
| `className` | `string`    | Optional | Custom CSS class(es) to apply to the modal description. |
| `children`  | `ReactNode` | Yes      | Description to display inside the modal.                |

### ModalFooter

| Property    | Type        | Required | Description                                        |
| ----------- | ----------- | -------- | -------------------------------------------------- |
| `className` | `string`    | Optional | Custom CSS class(es) to apply to the modal footer. |
| `children`  | `ReactNode` | Yes      | Content to display inside the modal footer.        |

## Styles

`react-ease-modal` allows you to add custom styles via the `className` prop of each subcomponent.

### Example with Custom Styles

```jsx
import { useState } from 'react';
import { Modal, ModalContent, ModalClose, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from 'react-ease-modal';
import './styles/global.css'; // Your custom CSS file

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
                        <ModalTitle className="modal-title">Modal Title</ModalTitle>
                        <ModalDescription className="modal-description">This is the modal content.</ModalDescription>
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
```

### Sample CSS File

```css
/* Basic styles */
main {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn {
    border-radius: 2rem;
    transition: background-color 0.4s, border 0.4s;
}

.btn-primary {
    background-color: #e2e2e2;
    color: #536cb4;
    padding: 1rem 2rem;
}

.btn-primary:hover {
    background-color: transparent;
    color: #e2e2e2;
}

.modal-overlay {
    position: absolute;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.modal-container {
    background-color: #323232;
    border-radius: 0.8rem;
    padding: 1.5rem;
    width: 450px;
    box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 6px;
}

.modal-header {
    text-align: center;
    padding-bottom: 1rem;
}

.modal-title {
    color: #e2e2e2;
    margin: 1rem 0;
}

.modal-description {
    color: #bebebe;
}

.modal-footer {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    border-top: 1px solid #bebebe;
}
```

## License

This project is licensed under the [MIT](LICENSE) license.

---

