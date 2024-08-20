'use client'

import Page from "@/app/landing/page";
import Lenis from "lenis";
import {useEffect} from "react";

export default function Home() {
  useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);
    return <Page/>
}
