import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import '@/styles/reset.css';

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
