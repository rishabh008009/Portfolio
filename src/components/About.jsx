'use client';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import styles from './About.module.css';

const tools = [
    { name: 'Power BI', icon: '📊' },
    { name: 'Jira', icon: '📋' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Canva', icon: '🖌️' },
    { name: 'Excel', icon: '📈' },
    { name: 'SQL', icon: '🗃️' },
    { name: 'Supabase', icon: '⚡' },
    { name: 'Google Gemini', icon: '🤖' },
    { name: 'n8n', icon: '🔗' },
    { name: 'React', icon: '⚛️' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
};

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className="section">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className={styles.grid}
                >
                    {/* Photo */}
                    <motion.div className={styles.photoWrap} variants={fadeUp} custom={0}>
                        <div className={styles.photoFrame}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/profile.jpg"
                                alt="Rishabh Singh"
                                className={styles.photo}
                            />
                            <div className={styles.photoGlow} />
                        </div>
                    </motion.div>

                    {/* Text */}
                    <div className={styles.text}>
                        <motion.p className="section-label" variants={fadeUp} custom={1}>
                            <Sparkles size={14} /> About Me
                        </motion.p>
                        <motion.h2 className="section-title" variants={fadeUp} custom={2}>
                            8+ Years at Amazon.<br />Now Building AI Products.
                        </motion.h2>
                        <motion.p className={styles.bio} variants={fadeUp} custom={3}>
                            Hi, I&apos;m <strong>Rishabh Singh</strong> — a product-focused professional with
                            8+ years of experience at <strong>Amazon</strong>, transitioning from enterprise
                            operations leadership into product management. I completed my{' '}
                            <strong>Product Management &amp; Agentic AI certification from IIT Patna</strong>,
                            gaining hands-on experience in problem framing, user research, PRD writing,
                            wireframing, and roadmap prioritization.
                        </motion.p>
                        <motion.p className={styles.bio} variants={fadeUp} custom={4}>
                            My operations background gives me a unique edge — I deeply understand
                            user pain points, data-driven decision making, and cross-functional collaboration.
                            I&apos;ve already delivered AI-powered platforms including an intelligent{' '}
                            <strong>recruitment system leveraging Google Gemini AI</strong> and workflow
                            automation. Now I&apos;m channeling those skills into building scalable,
                            user-centric products.
                        </motion.p>

                        {/* Tool strip */}
                        <motion.div className={styles.tools} variants={fadeUp} custom={5}>
                            {tools.map(({ name, icon }) => (
                                <motion.div
                                    key={name}
                                    className={styles.toolChip}
                                    whileHover={{ scale: 1.08, y: -3 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <span className={styles.toolIcon}>{icon}</span>
                                    <span className={styles.toolName}>{name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
