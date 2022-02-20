import React, { useEffect, useState } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function WindowDimensions() {
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
        return 'small';
    }

    if (width > 768 && width < 1440) {
        return 'medium';
    }

    if (width > 1440) {
        return 'large';
    }
}

export function isMobileViewport() {
    return WindowDimensions() === 'mobile';
}

export function isSmallViewport() {
    return WindowDimensions() === 'small';
}

export function isMediumViewport() {
    return WindowDimensions() === 'medium';
}

export function isLargeViewport() {
    return WindowDimensions() === 'large';
}
