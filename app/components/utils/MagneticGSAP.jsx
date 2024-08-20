'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MagneticGSAP({ children }) {
    const magnetic = useRef(null);

    useEffect(() => {
        if (!magnetic.current) return; // Ensure magnetic.current is not null

        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x);
            yTo(y);
        };

        const mouseLeave = () => {
            gsap.to(magnetic.current, { x: 0, duration: 1 });
            gsap.to(magnetic.current, { y: 0, duration: 1 });
            xTo(0);
            yTo(0);
        };

        magnetic.current.addEventListener("mousemove", mouseMove);
        magnetic.current.addEventListener("mouseleave", mouseLeave);

        return () => {
            if (magnetic.current) { // Ensure magnetic.current is not null before removing listeners
                magnetic.current.removeEventListener("mousemove", mouseMove);
                magnetic.current.removeEventListener("mouseleave", mouseLeave);
            }
        };
    }, []);

    return React.cloneElement(children, { ref: magnetic });
}