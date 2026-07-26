import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import './index.css';

// Safely suppress background browser extension errors (e.g. MetaMask / Wallet provider failures)
window.addEventListener(
  'unhandledrejection',
  (event) => {
    const reasonMsg =
      typeof event.reason === 'string'
        ? event.reason
        : event.reason?.message || '';
    if (
      reasonMsg.includes('MetaMask') ||
      reasonMsg.includes('ethereum') ||
      reasonMsg.includes('Failed to connect') ||
      reasonMsg.includes('wallet') ||
      reasonMsg.includes('extension')
    ) {
      event.preventDefault();
      event.stopPropagation();
    }
  },
  true,
);

window.addEventListener(
  'error',
  (event) => {
    const msg = event.message || '';
    const filename = event.filename || '';
    if (
      msg.includes('MetaMask') ||
      msg.includes('ethereum') ||
      msg.includes('Failed to connect') ||
      msg.includes('wallet') ||
      filename.includes('extension') ||
      filename.includes('chrome-extension') ||
      filename.includes('moz-extension')
    ) {
      event.preventDefault();
      event.stopPropagation();
    }
  },
  true,
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
