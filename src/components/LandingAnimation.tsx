import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
    { text: "Hello", lang: "en" },
    { text: "नमस्ते", lang: "hi", font: "font-serif" }, // Adjust font if needed for scripts
    { text: "Hola", lang: "es" },
    { text: "Bonjour", lang: "fr" },
    { text: "مرحبا", lang: "ar", font: "font-serif" },
    { text: "Ciao", lang: "it" },
];

interface LandingAnimationProps {
    onComplete: () => void;
}

const LandingAnimation = ({ onComplete }: LandingAnimationProps) => {
    const [index, setIndex] = useState(0);
    const [showBrand, setShowBrand] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        // Cycle through greetings
        if (index < greetings.length) {
            const timeout = setTimeout(() => {
                setIndex((prev) => prev + 1);
            }, 250); // Fast cycle per word
            return () => clearTimeout(timeout);
        } else {
            // After all greetings, show brand
            setTimeout(() => {
                setShowBrand(true);
            }, 300);
        }
    }, [index]);

    useEffect(() => {
        if (showBrand) {
            // Hold "Launchline" in center for a moment, then move
            const timer = setTimeout(() => {
                setIsFinished(true); // Triggers the move to navbar

                // Notify parent after the move animation is roughly done
                setTimeout(onComplete, 1000);
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [showBrand, onComplete]);

    return (
        <motion.div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black ${isFinished ? 'pointer-events-none' : ''}`}
            animate={{ backgroundColor: isFinished ? "rgba(0,0,0,0)" : "#000000" }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <AnimatePresence mode="wait">
                {!showBrand && index < greetings.length && (
                    <motion.h1
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
                        transition={{ duration: 0.2 }}
                        className={`text-4xl md:text-6xl font-light text-white ${greetings[index].font || "font-display"}`}
                    >
                        {greetings[index].text}
                    </motion.h1>
                )}
            </AnimatePresence>

            {showBrand && !isFinished && (
                <motion.div
                    layoutId="brand-logo-container"
                    className="absolute inset-0 flex items-center justify-center"
                    transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }}
                >
                    <motion.span
                        layoutId="brand-text"
                        className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight"
                    >
                        Launch<span className="text-primary">line</span>
                    </motion.span>
                </motion.div>
            )}
        </motion.div>
    );
};

export default LandingAnimation;
