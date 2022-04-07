import { useState, useEffect } from 'react';

function getWindowDimensions() {

    if (typeof window !== 'undefined') {

        return { innerWidth: window.innerWidth, innerHeight: window.innerHeight };
    }
    return null

}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (typeof window !== "undefined") {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowDimensions;
}
