'use client';
import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';
import styles from './Hero.module.css';

const words = ['Product Manager', '|', 'Agentic AI'];

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            {/* Animated background */}
            <div className={styles.bgOrbs}>
                <div className={`${styles.orb} ${styles.orb1}`} />
                <div className={`${styles.orb} ${styles.orb2}`} />
                <div className={`${styles.orb} ${styles.orb3}`} />
            </div>
            <div className={styles.gridOverlay} />

            <div className={styles.heroInner}>
                {/* Text content */}
                <div className={styles.content}>
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <span className={styles.badgeDot} />
                        Open to Product Manager Opportunities
                    </motion.div>

                    <motion.p
                        className={styles.greeting}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Hi, I&apos;m Rishabh Singh
                    </motion.p>

                    <h1 className={styles.headline}>
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                className={word === '|' ? styles.divider : styles.word}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        8+ years at Amazon · IIT Patna PM &amp; Agentic AI Certified ·
                        Building intelligent products at the intersection of AI &amp; user experience.
                    </motion.p>

                    <motion.div
                        className={styles.ctas}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            <ArrowDown size={18} />
                            View Projects
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <FileText size={18} />
                            Download Resume
                        </a>
                    </motion.div>
                </div>

                {/* Profile image */}
                <motion.div
                    className={styles.heroImage}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.imageGlow} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/profile-nobg.png"
                        alt="Rishabh Singh"
                        className={styles.heroPhoto}
                    />
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
            >
                <span className={styles.scrollText}>Scroll Down</span>
                <div className={styles.scrollArrows}>
                    <span className={styles.chevron} />
                    <span className={styles.chevron} />
                </div>
            </motion.div>
        </section>
    );
}
