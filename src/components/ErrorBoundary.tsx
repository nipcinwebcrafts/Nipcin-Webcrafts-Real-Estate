import React, { useState, useEffect, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
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
        return;
      }
      setHasError(true);
      setErrorMessage(msg || 'An unexpected runtime error occurred.');
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
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
        return;
      }
      setHasError(true);
      setErrorMessage(reasonMsg || 'An unexpected promise rejection occurred.');
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen bg-[#0E110F] text-white flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-[#171C19] border border-[#C7A44D]/30 rounded-2xl p-6 shadow-2xl text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-amber-500/20 text-[#C7A44D] flex items-center justify-center mx-auto">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h2 className="font-['Playfair_Display',serif] font-bold text-lg text-white">Application Notice</h2>
          <p className="text-xs text-slate-300">
            {errorMessage || 'The portal encountered a minor exception.'}
          </p>
          <button
            onClick={() => {
              setHasError(false);
              setErrorMessage(null);
              window.location.reload();
            }}
            className="px-4 py-2 bg-[#0F3D2E] hover:bg-[#17523F] text-[#C7A44D] border border-[#C7A44D]/40 text-xs font-bold rounded-xl flex items-center justify-center gap-2 mx-auto transition-colors cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reload Portal</span>
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

