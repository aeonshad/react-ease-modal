import { useState } from 'react';
import InternalModal from './components/InternalModal';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main>
            <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
                Open Modal
            </button>
            <InternalModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </main>
    );
}

export default App;

