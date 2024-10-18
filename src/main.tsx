import 'react-datepicker/dist/react-datepicker.css';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import '@/shared/styles/reset.css';

const root = createRoot(document.getElementById('root')!);

// async function deferRender() {
//   const RUN_MSW = 'true';
//   if (RUN_MSW === 'true') {
//     const { worker } = await import('./mocks/browser');
//     await worker.start();
//   }

//   return;
// }

// deferRender().then(() => {
//   root.render(<App />);
// });
root.render(<App />);
