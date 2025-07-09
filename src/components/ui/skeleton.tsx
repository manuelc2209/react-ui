// @ts-nocheck
import { cn } from '@/utils/helpers';

function Skeleton({ className, ...props }) {
    return (
        <div
            data-slot="skeleton"
            className={cn('bg-accent animate-pulse rounded-md', className)}
            {...props}
        />
    );
}

export { Skeleton };
