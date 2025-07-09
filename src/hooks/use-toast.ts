import { useState } from 'react';

interface ToastOptions {
    title: string;
    description?: string;
    variant?: 'default' | 'destructive';
}

export function useToast() {
    const [toasts, setToasts] = useState<ToastOptions[]>([]);

    const toast = (options: ToastOptions) => {
        // In a real implementation, this would show a toast notification
        // For now, we'll just log it and simulate the behavior
        console.log('Toast:', options);

        setToasts((prev) => [...prev, options]);

        // Auto-remove toast after 3 seconds
        setTimeout(() => {
            setToasts((prev) => prev.slice(1));
        }, 3000);
    };

    return { toast, toasts };
}
