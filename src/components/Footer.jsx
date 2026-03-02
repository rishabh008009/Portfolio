'use client';
import { motion } from 'framer-motion';
import { ArrowUp, Heart, Linkedin, Github, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <motion.button
                    className={styles.backToTop}
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Back to top"
                >
                    <ArrowUp size={18} />
                </motion.button>

                <div className={styles.socials}>
                    <a href="https://www.linkedin.com/in/rishabh-singh-1152899b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                    <a href="https://github.com/rishabh008009" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
                    <a href="mailto:rishabh.singh08@live.com" aria-label="Email"><Mail size={18} /></a>
                </div>

                <p className={styles.copy}>
                    © {new Date().getFullYear()} Rishabh Singh. Built with <Heart size={14} className={styles.heart} /> and Next.js
                </p>
            </div>
        </footer>
    );
}
