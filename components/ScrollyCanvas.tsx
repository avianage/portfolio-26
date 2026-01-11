'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll();

    // Map scroll (0 to 1) to frame index (0 to 119)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        // Preload images
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 0; i < FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    img.src = `/sequence/frame_${String(i).padStart(3, '0')}.webp`;
                    img.onload = () => resolve();
                    img.onerror = (e) => {
                        console.error(`Failed to load frame ${i}`, e);
                        resolve(); // Continue anyway to avoid hanging
                    };
                    loadedImages[i] = img;
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const img = images[index];
        if (!canvas || !img) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Canvas sizing (handle high DPI)
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;

        // Scale for consistency
        ctx.scale(dpr, dpr);
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        // Object-fit: cover logic
        const cw = window.innerWidth;
        const ch = window.innerHeight;
        const iw = img.width;
        const ih = img.height;

        let scale = Math.max(cw / iw, ch / ih);

        // Zoom out a bit on mobile to avoid extreme close-up
        if (cw < 768) {
            scale *= 0.7;
        }

        const x = (cw - iw * scale) / 2;
        const y = (ch - ih * scale) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, x, y, iw * scale, ih * scale);
    };

    useMotionValueEvent(frameIndex, 'change', (latest) => {
        if (!isLoaded) return;
        const index = Math.round(latest);
        renderFrame(index);
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded) renderFrame(Math.round(frameIndex.get()));
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, frameIndex]);



    return (
        <div id="top" className="h-[800vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                <canvas ref={canvasRef} className="block w-full h-full" />
                <Overlay />
            </div>
        </div>
    );
}
