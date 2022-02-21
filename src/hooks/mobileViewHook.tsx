import { useEffect, useState } from 'react';

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

    // Use the global css variables defined in :root to calculate according media queries
    const root = document.getElementById('root')!;

    const mobileVal =
        (parseInt(getComputedStyle(root).getPropertyValue('--mobile'), 10) as unknown as number) || 600;
    const smallVal =
        (parseInt(getComputedStyle(root).getPropertyValue('--small'), 10) as unknown as number) || 768;
    const mediumVal =
        (parseInt(getComputedStyle(root).getPropertyValue('--medium'), 10) as unknown as number) || 1024;
    const largeVal =
        (parseInt(getComputedStyle(root).getPropertyValue('--large'), 10) as unknown as number) || 1440;

    if (width < mobileVal) {
        return 'mobile';
    }

    if (width > mobileVal && width < smallVal) {
        return 'small';
    }

    if (width > smallVal && width < mediumVal) {
        return 'medium';
    }

    if (width > largeVal) {
        return 'large';
    }
}

export const useViewport = () => {
    const isMobileViewport = () => {
        return WindowDimensions() === 'mobile';
    };
    const isSmallViewport = () => {
        return WindowDimensions() === 'small';
    };
    const isMediumViewport = () => {
        return WindowDimensions() === 'medium';
    };
    const isLargeViewport = () => {
        return WindowDimensions() === 'large';
    };
    return { isMobileViewport, isSmallViewport, isMediumViewport, isLargeViewport };
};
