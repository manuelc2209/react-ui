import React from 'react';
import { cn } from '@/utils/helpers';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number;
    max?: number;
}

export function Progress({ className, value = 0, max = 100, ...props }: ProgressProps) {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
        <div
            className={cn('relative h-2 w-full overflow-hidden rounded-full bg-secondary', className)}
            {...props}
        >
            <div
                className="h-full w-full flex-1 bg-primary transition-all"
                style={{ transform: `translateX(-${100 - percentage}%)` }}
            />
        </div>
    );
}
