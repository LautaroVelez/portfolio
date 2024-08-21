'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MagneticGSAP({ children }) {
    const magnetic = useRef(null);

    useEffect(() => {
        if (!magnetic.current) return; // Asegurarse de que magnetic.current no sea null

        const element = magnetic.current; // Guardar el valor actual de magnetic.current

        const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = element.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x);
            yTo(y);
        };

        const mouseLeave = () => {
            gsap.to(element, { x: 0, duration: 1 });
            gsap.to(element, { y: 0, duration: 1 });
            xTo(0);
            yTo(0);
        };

        element.addEventListener("mousemove", mouseMove);
        element.addEventListener("mouseleave", mouseLeave);

        return () => {
            if (element) { // Asegurarse de que element no sea null antes de remover los listeners
                element.removeEventListener("mousemove", mouseMove);
                element.removeEventListener("mouseleave", mouseLeave);
            }
        };
    }, []); // No se necesita agregar `magnetic.current` a las dependencias ya que usamos `element` dentro del useEffect

    return React.cloneElement(children, { ref: magnetic });
}
