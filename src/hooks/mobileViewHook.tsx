import React, { useEffect, useState } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function WindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const width = windowDimensions.width;

    if (width < 600) {
        return 'mobile';
    }

    if (width > 600 && width < 768) {
        return 'medium';
    }

    if (width > 768 && width < 1440) {
        return 'large';
    }

    if (width > 1440) {
        return 'xl';
    }
}

export function isMobileView() {
    return WindowDimensions() === 'mobile';
}
