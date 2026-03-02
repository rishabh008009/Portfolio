'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap } from 'lucide-react';
import styles from './Skills.module.css';

const skills = [
    { name: 'Product Thinking & Problem Framing', level: 90 },
    { name: 'User Research & Requirement Gathering', level: 88 },
    { name: 'Roadmap Planning & Prioritization', level: 85 },
    { name: 'Data-Driven Decision Making', level: 92 },
    { name: 'Stakeholder Collaboration', level: 95 },
    { name: 'Process Improvement & Delivery', level: 90 },
    { name: 'Metrics Definition & Evaluation', level: 85 },
];

const tools = [
    { name: 'Power BI', emoji: '📊' },
    { name: 'Jira', emoji: '📋' },
    { name: 'Figma', emoji: '🎨' },
    { name: 'Canva', emoji: '🖌️' },
    { name: 'Excel', emoji: '📈' },
    { name: 'SQL', emoji: '🗃️' },
    { name: 'Supabase', emoji: '⚡' },
    { name: 'Google Gemini', emoji: '🤖' },
    { name: 'n8n', emoji: '🔗' },
    { name: 'React', emoji: '⚛️' },
    { name: 'TypeScript', emoji: '💎' },
    { name: 'PowerPoint', emoji: '📑' },
];

function SkillBar({ name, level, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <div className={styles.skillRow} ref={ref}>
            <div className={styles.skillInfo}>
                <span className={styles.skillName}>{name}</span>
                <span className={styles.skillPct}>{level}%</span>
            </div>
            <div className={styles.barTrack}>
                <motion.div
                    className={styles.barFill}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : {}}
                    transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills">
            <div className="section">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label"><Zap size={14} /> Skills & Tools</p>
                    <h2 className="section-title">My PM Toolkit</h2>
                    <p className="section-subtitle">
                        Skills honed through 8+ years at Amazon and hands-on PM projects — from product strategy to AI-powered delivery.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {/* Skills bars */}
                    <div className={styles.skillsCol}>
                        <h3 className={styles.colTitle}>Core PM Skills</h3>
                        {skills.map((skill, i) => (
                            <SkillBar key={skill.name} {...skill} index={i} />
                        ))}
                    </div>

                    {/* Tools grid */}
                    <div className={styles.toolsCol}>
                        <h3 className={styles.colTitle}>Tools I Use</h3>
                        <div className={styles.toolGrid}>
                            {tools.map((tool, i) => (
                                <motion.div
                                    key={tool.name}
                                    className={styles.toolTile}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.4 }}
                                    whileHover={{ scale: 1.08, y: -4 }}
                                >
                                    <span className={styles.toolEmoji}>{tool.emoji}</span>
                                    <span className={styles.toolLabel}>{tool.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
