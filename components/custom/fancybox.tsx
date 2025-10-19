"use client"
import React, { useRef, useEffect } from 'react';

import { Fancybox as NativeFancybox } from '@fancyapps/ui';

const FancyBox = ({ delegate, options, children, ...divProps }: any) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const delegateData = delegate || '[data-fancybox]';
        const optionsData = options || {};

        NativeFancybox.bind(container, delegateData, optionsData);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    });

    return (
        <div ref={containerRef} {...divProps}>
            {children}
        </div>
    );
};

export default FancyBox;
