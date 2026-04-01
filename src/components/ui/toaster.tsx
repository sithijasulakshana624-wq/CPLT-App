import { useEffect, useState } from 'react';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

let toastId = 0;
const toastListeners: Array<(toast: Toast) => void> = [];

export function toast(message: string, type: 'success' | 'error' | 'info' = 'info') {
  const newToast: Toast = { id: toastId++, message, type };
  toastListeners.forEach(listener => listener(newToast));
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const listener = (toast: Toast) => {
      setToasts(prev => [...prev, toast]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== toast.id));
      }, 3000);
    };

    toastListeners.push(listener);
    return () => {
      const index = toastListeners.indexOf(listener);
      if (index > -1) toastListeners.splice(index, 1);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map(t => (
        <div
          key={t.id}
          className={`px-4 py-3 rounded-lg shadow-lg text-white ${
            t.type === 'success' ? 'bg-green-500' :
            t.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
          }`}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
