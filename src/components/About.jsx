'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download } from 'lucide-react';
import styles from './About.module.css';

const tools = [
    { name: 'Power BI', icon: '📊' },
    { name: 'Jira', icon: '📋' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Canva', icon: '✏️' },
    { name: 'Excel', icon: '📈' },
    { name: 'SQL', icon: '🗃️' },
    { name: 'Supabase', icon: '⚡' },
    { name: 'Google Gemini', icon: '🤖' },
    { name: 'n8n', icon: '🔗' },
    { name: 'React', icon: '⚛️' },
];

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.inner}>
                {/* Left — Photo */}
                <motion.div
                    className={styles.photoCol}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.photoWrap}>
                        <Image
                            src="/profile-nobg.png"
                            alt="Rishabh Singh"
                            width={420}
                            height={520}
                            className={styles.photo}
                            priority
                        />
                    </div>
                </motion.div>

                {/* Right — Content */}
                <motion.div
                    className={styles.contentCol}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className={styles.label}>— ✦ About Me</span>
                    <h2 className={styles.heading}>
                        8+ Years at Amazon.
                        <br />
                        Now Building AI Products.
                    </h2>
                    <p className={styles.body}>
                        Hi, I&apos;m <strong>Rishabh Singh</strong> — a product-focused professional
                        with 8+ years of experience at <strong>Amazon</strong>, transitioning from
                        enterprise operations leadership into product management. I completed my{' '}
                        <strong>Product Management &amp; Agentic AI certification from IIT Patna</strong>,
                        gaining hands-on experience in problem framing, user research, PRD writing,
                        wireframing, and roadmap prioritization.
                    </p>
                    <p className={styles.body}>
                        My operations background gives me a unique edge — I deeply understand user
                        pain points, data-driven decision making, and cross-functional collaboration.
                        I&apos;ve already delivered AI-powered platforms including an intelligent{' '}
                        <strong>recruitment system leveraging Google Gemini AI</strong> and workflow
                        automation. Now I&apos;m channeling those skills into building scalable,
                        user-centric products.
                    </p>

                    {/* Tool badges */}
                    <div className={styles.badges}>
                        {tools.map((tool) => (
                            <span key={tool.name} className={styles.badge}>
                                <span className={styles.badgeIcon}>{tool.icon}</span>
                                {tool.name}
                            </span>
                        ))}
                    </div>

                    <a href="/resume.pdf" download className={styles.downloadBtn}>
                        <Download size={16} /> Download Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
