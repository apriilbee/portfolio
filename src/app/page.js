"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Navbar from "@/components/Navbar";
import Toggle from "@/components/sub/Toggle";

import { useState, useRef, useEffect } from "react";

export default function Home() {
    const [id, setId] = useState(null);
    const compsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const intersecting = entry.isIntersecting;
                    const sectionId = entry.target.id;

                    if (intersecting) {
                        setId(sectionId);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: "0px 0px -30% 0px",
            }
        );

        const compsArr = Array.from(compsRef.current.children);
        compsArr.forEach((comp) => {
            observer.observe(comp);
        });

        // Cleanup observer on unmount
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Toggle>
                <Navbar id={id} />
                <div className="w-full" ref={compsRef}>
                    <Hero />
                    <About />
                    <Blog />
                </div>
            </Toggle>
        </>
    );
}
