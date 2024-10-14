import { createRoot } from 'react-dom/client';
import Dashboard from './components/Dashboard';
import './styles.css';

const container = document.getElementById('index');
const root = createRoot(container);
root.render(<Dashboard />);
