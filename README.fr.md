# React Ease Modal

<a href='https://github.com/aeonshad/react-ease-modal/blob/main/README.md'><img alt="Static Badge" src="https://img.shields.io/badge/version-English%7CAnglais-%2322802b?style=flat&logo=readme&logoColor=%23b3bd68&label=Readme"></a>
<a href='https://fr.react.dev/'><img alt="Static Badge" src="https://img.shields.io/badge/version-18.3.1-blue?style=flat&logo=React&label=React"></a>
<a href='https://www.npmjs.com/'><img alt="Static Badge" src="https://img.shields.io/badge/version-10.8.2-red?style=flat&logo=NPM&label=NPM"></a>
<a href='https://github.com/aeonshad/react-ease-modal/blob/main/LICENSE'><img alt="Static Badge" src="https://img.shields.io/badge/version-MIT-%23cfb232?style=flat&logoColor=%23b3bd68&label=License"></a>

Un composant de modale simple, modulaire et personnalisable pour les applications React. Compatible avec Tailwind CSS, il permet une gestion flexible des modales avec diverses options de style et d'accessibilité.

## Table des matières

-   [Installation](#installation)
-   [Compatibilité et Dépendances](#compatibilité-et-dépendances)
-   [Utilisation](#utilisation)
-   [Propriétés](#propriétés)
-   [Styles](#styles)
-   [Accessibilité](#accessibilité)
-   [Licence](#licence)

## Installation

Pour installer `react-ease-modal` dans votre projet React, exécutez l'une des commandes suivantes :

```bash
npm install react-ease-modal
```

ou

```bash
yarn add react-ease-modal
```

## Compatibilité et Dépendances

### Dépendances

`react-ease-modal` ne dépend d'aucune bibliothèque externe pour fonctionner.

### Compatibilité

-   **React** : Compatible avec React 17+ et React 18+.
-   **Tailwind CSS (optionnel)** : Bien que Tailwind ne soit pas requis, vous pouvez l'utiliser pour styliser la modale.
-   **CSS** : Vous pouvez utiliser vos propres classes CSS pour une personnalisation supplémentaire.

## Utilisation

Pour utiliser `react-ease-modal` et ses sous-composants, importez-les dans votre fichier React et intégrez-les dans votre JSX :

```jsx
import { useState } from 'react';
import { Modal, ModalContent, ModalClose, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from 'react-ease-modal';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main>
            <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
                Ouvrir la modale
            </button>
            <Modal open={isOpen}>
                <ModalContent>
                    <ModalClose onClose={() => setIsOpen(false)} />
                    <ModalHeader>
                        <ModalTitle>Titre de la modale</ModalTitle>
                        <ModalDescription>Ceci est le contenu de la modale.</ModalDescription>
                    </ModalHeader>
                    <ModalFooter>
                        <button className="btn btn-secondary" onClick={() => setIsOpen(false)}>
                            Fermer la modale
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </main>
    );
}

export default App;
```

## Propriétés

### Modal

| Propriété         | Type        | Requis     | Description                                                                                 |
| ----------------- | ----------- | ---------- | ------------------------------------------------------------------------------------------- |
| `className`       | `string`    | Facultatif | Classe(s) CSS personnalisée(s) à appliquer à la modale.                                     |
| `open`            | `boolean`   | Oui        | Indique si la modale est ouverte ou fermée.                                                 |
| `children`        | `ReactNode` | Oui        | Contenu à afficher à l'intérieur de la modale.                                              |
| `ariaLabelledBy`  | `string`    | Facultatif | ID de l'élément définissant le titre de la modale pour l'attribut `aria-labelledby`.        |
| `ariaDescribedBy` | `string`    | Facultatif | ID de l'élément définissant la description de la modale pour l'attribut `aria-describedby`. |

### ModalContent

| Propriété   | Type        | Requis     | Description                                                         |
| ----------- | ----------- | ---------- | ------------------------------------------------------------------- |
| `className` | `string`    | Facultatif | Classe(s) CSS personnalisée(s) à appliquer au contenu de la modale. |
| `children`  | `ReactNode` | Oui        | Contenu à afficher à l'intérieur de la modale.                      |
| `ariaLabel` | `string`    | Facultatif | Libellé pour l'attribut `aria-label` pour le contenu de la modale.  |

### ModalClose

| Propriété   | Type       | Requis     | Description                                                                     |
| ----------- | ---------- | ---------- | ------------------------------------------------------------------------------- |
| `className` | `string`   | Facultatif | Classe(s) CSS personnalisée(s) à appliquer à l'icône de fermeture de la modale. |
| `onClose`   | `function` | Oui        | Fonction de rappel appelée pour fermer la modale.                               |
| `ariaLabel` | `string`   | Facultatif | Libellé pour l'attribut `aria-label` de l'icône de fermeture.                   |

### ModalHeader

| Propriété   | Type        | Requis     | Description                                                          |
| ----------- | ----------- | ---------- | -------------------------------------------------------------------- |
| `className` | `string`    | Facultatif | Classe(s) CSS personnalisée(s) à appliquer à l'en-tête de la modale. |
| `children`  | `ReactNode` | Oui        | Contenu à afficher dans l'en-tête de la modale.                      |
| `ariaLabel` | `string`    | Facultatif | Libellé pour l'attribut `aria-label` pour l'en-tête de la modale.    |

### ModalTitle

| Propriété   | Type        | Requis     | Description                                                                     |
| ----------- | ----------- | ---------- | ------------------------------------------------------------------------------- |
| `className` | `string`    | Facultatif | Classe(s) CSS personnalisée(s) à appliquer au titre de la modale.               |
| `children`  | `ReactNode` | Oui        | Titre à afficher dans la modale.                                                |
| `id`        | `string`    | Facultatif | ID utilisé pour l'attribut `aria-labelledby` afin de lier le titre à la modale. |

### ModalDescription

| Propriété   | Type        | Requis     | Description                                                                            |
| ----------- | ----------- | ---------- | -------------------------------------------------------------------------------------- |
| `className` | `string`    | Facultatif | Classe(s) CSS personnalisée(s) à appliquer à la description de la modale.              |
| `children`  | `ReactNode` | Oui        | Description à afficher dans la modale.                                                 |
| `id`        | `string`    | Facultatif | ID utilisé pour l'attribut `aria-describedby` afin de lier la description à la modale. |

### ModalFooter

| Propriété   | Type        | Requis     | Description                                                      |
| ----------- | ----------- | ---------- | ---------------------------------------------------------------- |
| `className` | `string`    | Facultatif | Classe(s) CSS personnalisée(s) à appliquer au pied de la modale. |
| `children`  | `ReactNode` | Oui        | Contenu à afficher dans le pied de la modale.                    |
| `ariaLabel` | `string`    | Facultatif | Libellé pour l'attribut `aria-label` pour le pied de la modale.  |

## Styles

`react-ease-modal` vous permet d'ajouter des styles personnalisés via la propriété `className` de chaque sous-composant.

### Exemple avec styles personnalisés

```jsx
import { useState } from 'react';
import { Modal, ModalContent, ModalClose, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from 'react-ease-modal';
import './styles/global.css'; // Votre fichier CSS personnalisé

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main>
            <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
                Ouvrir la modale
            </button>
            <Modal className="modal-overlay" open={isOpen}>
                <ModalContent className="modal-container">
                    <ModalClose className="modal-icon" onClose={() => setIsOpen(false)} />
                    <img className="modal-hero" src="./hero.svg" alt="hero" />
                    <ModalHeader className="modal-header">
                        <ModalTitle className="modal-title">Titre de la modale</ModalTitle>
                        <ModalDescription className="modal-description">Ceci est le contenu de la modale.</ModalDescription>
                    </ModalHeader>
                    <ModalFooter className="modal-footer">
                        <button className="btn btn-secondary" onClick={() => setIsOpen(false)}>
                            Fermer la modale
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </main>
    );
}

export default App;
```

### Exemple de fichier CSS

```css
/* Styles de base */
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

## Accessibilité

Le composant Modal inclut plusieurs fonctionnalités visant à améliorer l'accessibilité :

-   **Identification comme dialogue** : Utilisation de l'attribut `role="dialog"` pour indiquer que la fenêtre modale est un dialogue, ce qui améliore l'expérience des utilisateurs de lecteurs d'écran.
-   **Gestion du contenu en arrière-plan** : L'attribut `aria-modal="true"` signale aux technologies d'assistance que le contenu derrière la modale n'est pas accessible tant que celle-ci est ouverte.
-   **Descriptions contextuelles** :
    -   Les attributs `aria-labelledby` et `aria-describedby` fournissent des descriptions supplémentaires :
        -   `aria-labelledby` associe un élément, tel qu'un titre de modale, au dialogue afin que le titre soit annoncé.
        -   `aria-describedby` lie une description au dialogue, offrant un contexte supplémentaire aux utilisateurs.
-   **Gestion du focus** : L'attribut `tabIndex="-1"` est ajouté pour s'assurer que la modale reçoit le focus lorsque l'utilisateur navigue via le clavier.
-   **Accessibilité du bouton de fermeture** : Le bouton de fermeture inclut un attribut `aria-label` pour décrire sa fonction aux utilisateurs de lecteurs d'écran.
-   **Attributs `aria-label` supplémentaires** : Les composants et les sous-composants peuvent également inclure des attributs `aria-label` pour fournir des descriptions contextuelles.

---

Ces bonnes pratiques améliorent l'interaction avec la modale pour les utilisateurs de technologies d'assistance et favorisent une expérience utilisateur inclusive.

### Exemple

```jsx
import { useState } from 'react';
import { Modal, ModalContent, ModalClose, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from 'react-ease-modal';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main>
            <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
                Ouvrir la modale
            </button>
            <Modal className="modal-overlay" open={isOpen} ariaLabelledBy="modal-title" ariaDescribedBy="modal-description">
                <ModalContent className="modal-container">
                    <ModalClose className="modal-icon" onClose={() => setIsOpen(false)} ariaLabel="Fermer la modale" />
                    <img className="modal-hero" src="./hero.svg" alt="hero" />
                    <ModalHeader className="modal-header">
                        <ModalTitle className="modal-title" id="modal-title">
                            Titre de la modale
                        </ModalTitle>
                        <ModalDescription className="modal-description" id="modal-description">
                            Ceci est le contenu de la modale.
                        </ModalDescription>
                    </ModalHeader>
                    <ModalFooter className="modal-footer">
                        <button className="btn btn-secondary" onClick={() => setIsOpen(false)}>
                            Fermer la modale
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </main>
    );
}

export default App;
```

## Licence

Ce projet est sous licence [MIT](LICENSE).

---
