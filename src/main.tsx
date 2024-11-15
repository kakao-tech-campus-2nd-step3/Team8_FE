import 'react-datepicker/dist/react-datepicker.css';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import '@/shared/styles/reset.css';

const root = createRoot(document.getElementById('root')!);

root.render(<App />);
