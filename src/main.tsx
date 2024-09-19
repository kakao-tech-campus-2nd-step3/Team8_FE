import ReactDOM from 'react-dom/client';

import App from '@/App';
import '@/styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

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
