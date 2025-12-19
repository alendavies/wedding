import './style.css';
import { createRoot } from 'react-dom/client';
import Main from './components/Main';

const rootEl = document.getElementById('root');
if (!rootEl)
    throw new Error(
        'Root element not found: add <div id="root"></div> to index.html'
    );

createRoot(rootEl).render(<Main />);
