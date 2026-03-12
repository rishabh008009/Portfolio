'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import styles from './Hero.module.css';

/* letters we want to reveal one-by-one */
const WORD = 'MANAGER';
const letters = WORD.split('');

function RevealLetter({ char, progress, range }) {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className={styles.letterWrap}>
            {/* ghost outline layer — always visible */}
            <span className={`${styles.letterGhost} text-outline`}>{char}</span>
            {/* solid layer — fades in on scroll */}
            <motion.span className={styles.letterSolid} style={{ opacity }}>
                {char}
            </motion.span>
        </span>
    );
}

export default function Hero() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    return (
        <section ref={sectionRef} className={styles.hero} id="hero">
            {/* Ambient orbs */}
            <div className={`${styles.orb} ${styles.orbSage}`} />
            <div className={`${styles.orb} ${styles.orbBlue}`} />

            <div className={styles.sticky}>
                <div className={styles.content}>
                    <div className={styles.headline}>
                        <h1 className={styles.title}>
                            <span className={styles.solidLine}>Product</span>
                            <span className={styles.revealLine}>
                                {letters.map((char, i) => {
                                    const start = i / letters.length;
                                    const end = start + 1 / letters.length;
                                    /* reveal fills across 0→0.7 of scroll progress */
                                    return (
                                        <RevealLetter
                                            key={i}
                                            char={char}
                                            progress={scrollYProgress}
                                            range={[start * 0.7, end * 0.7]}
                                        />
                                    );
                                })}
                            </span>
                        </h1>
                    </div>

                    <div className={styles.bottom}>
                        <motion.p
                            className={styles.tagline}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            8+ Years at Amazon · Building AI-powered products that transform business outcomes
                        </motion.p>

                        <motion.a
                            href="#about"
                            className={styles.scrollArrow}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <ArrowDown size={20} strokeWidth={1} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}
