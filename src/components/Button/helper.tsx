export const getSizeInPx = (size: string): number => {
    switch (size) {
        case 'large':
            return 36;
        case 'medium':
            return 28;
        default:
            return 26;
    }
};
