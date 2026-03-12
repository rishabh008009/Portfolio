'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.inner}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.heading}>Let&apos;s Connect</h2>
                    <a href="mailto:rishabh.singh08@live.com" className={styles.email}>
                        rishabh.singh08@live.com
                    </a>
                </motion.div>

                <motion.div
                    className={styles.socials}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <a href="https://www.linkedin.com/in/rishabh-singh-1152899b/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        LinkedIn <ArrowUpRight size={14} />
                    </a>
                    <a href="https://github.com/rishabh008009" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        GitHub <ArrowUpRight size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
