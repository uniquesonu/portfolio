"use client";
import React, { useEffect } from 'react';

const VisitCounter = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.counter.dev/script.js";
        script.async = true;
        script.setAttribute('data-id', '100d59b2-ade5-4d90-b213-9515a19e1958');
        script.setAttribute('data-utcoffset', '6');
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default VisitCounter;
