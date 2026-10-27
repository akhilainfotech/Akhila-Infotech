'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CheckCircle, AlertTriangle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  }, []);

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast Notification Desk */}
      <div
        id="toast-container"
        className="fixed bottom-5 right-5 z-[110] flex flex-col gap-3 max-w-sm w-[calc(100%-2.5rem)] pointer-events-none"
        aria-live="polite"
      >
        {toasts.map(toast => {
          const typeClasses = {
            success: 'bg-[#0f2147] text-white border-cyan-400 shadow-cyan-950/20',
            error: 'bg-red-950 text-white border-red-500 shadow-red-950/20',
            info: 'bg-slate-900 text-white border-slate-700 shadow-slate-950/20',
          }[toast.type];

          return (
            <div
              key={toast.id}
              className={`pointer-events-auto flex items-center justify-between gap-3 p-3.5 rounded-xl border shadow-xl text-xs font-medium transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 ${typeClasses}`}
            >
              <div className="flex items-center gap-2">
                {toast.type === 'success' && <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />}
                {toast.type === 'error' && <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />}
                {toast.type === 'info' && <Info className="w-4 h-4 text-cyan-300 shrink-0" />}
                <span>{toast.message}</span>
              </div>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className="text-slate-400 hover:text-white ml-2 transition-colors"
                aria-label="Close notification"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextType {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
