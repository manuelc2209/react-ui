import React, { useEffect, useRef, useState } from 'react';

export const UseDebounce = (value: React.SetStateAction<any>, delay: number | undefined) => {
    const [debouncedValue, setDebouncedValue] = useState<any>();
    const firstDebounce = useRef(true);

    useEffect(() => {
        if (value && firstDebounce.current) {
            setDebouncedValue(value);
            firstDebounce.current = false;
            return;
        }

        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // eslint-disable-next-line consistent-return
        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
};
