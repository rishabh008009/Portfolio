'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
    Briefcase, TrendingUp, Users, Award,
    Target, Brain,
} from 'lucide-react';
import styles from './Skills.module.css';

/* ── Animated counter ── */
function Counter({ value, suffix, isInView }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const dur = 2000;
        const step = value / (dur / 16);
        const t = setInterval(() => {
            start += step;
            if (start >= value) { setCount(value); clearInterval(t); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(t);
    }, [isInView, value]);
    return <>{count}{suffix}</>;
}

/* ── Cell animation ── */
const anim = (d = 0) => ({
    initial: { opacity: 0, y: 24, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: '-60px' },
    transition: { delay: d, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
});

/* ── Data ── */
const chips = [
    'User Research', 'Data-Driven Decisions', 'Cross-Functional Leadership',
    'Agile & Scrum', 'UX Design & Prototyping', 'Stakeholder Management',
    'Process Optimization', 'KPI Dashboards',
];

const tools = [
    { name: 'Figma', emoji: '🎨' },
    { name: 'Jira', emoji: '📋' },
    { name: 'SQL', emoji: '🗄️' },
    { name: 'React', emoji: '⚛️' },
    { name: 'Supabase', emoji: '⚡' },
    { name: 'n8n', emoji: '🔗' },
    { name: 'Power BI', emoji: '📊' },
    { name: 'Canva', emoji: '🖌️' },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="skills" className={styles.skills} ref={ref}>
            <div className={styles.inner}>
                <motion.span className={styles.label} {...anim(0)}>Capabilities</motion.span>
                <motion.h2 className={styles.heading} {...anim(0.05)}>
                    WHAT I BRING<br />TO THE TABLE
                </motion.h2>

                <div className={styles.bento}>
                    {/* ─── ROW 1 ─── */}
                    {/* Tagline — 2 cols */}
                    <motion.div className={`${styles.cell} ${styles.aTagline}`} {...anim(0.1)}>
                        <h3 className={styles.taglineText}>
                            Building Products at the Intersection of{' '}
                            <em className={styles.em}>AI</em> &amp; User{' '}
                            <em className={styles.em}>Experience</em>
                        </h3>
                    </motion.div>

                    {/* Stat — Years */}
                    <motion.div className={`${styles.cell} ${styles.statCell} ${styles.aStatYears}`} {...anim(0.15)} whileHover={{ y: -4, scale: 1.03 }}>
                        <Briefcase size={20} className={styles.statIcon} />
                        <span className={styles.statNumber}><Counter value={8} suffix="+" isInView={isInView} /></span>
                        <span className={styles.statLabel}>Years at Amazon</span>
                    </motion.div>

                    {/* Tools — tall, spans 2 rows */}
                    <motion.div className={`${styles.cell} ${styles.aTools}`} {...anim(0.2)}>
                        <span className={styles.toolsHeading}>Tools &amp; Tech</span>
                        <ul className={styles.toolsList}>
                            {tools.map((tool, i) => (
                                <motion.li key={tool.name} className={styles.toolItem}
                                    initial={{ opacity: 0, x: 8 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.05, duration: 0.35 }}
                                >
                                    <span className={styles.toolEmoji}>{tool.emoji}</span>
                                    {tool.name}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* ─── ROW 2 ─── */}
                    {/* Skill: Product Strategy */}
                    <motion.div className={`${styles.cell} ${styles.skillCard} ${styles.aSkill1}`} {...anim(0.25)} whileHover={{ y: -4 }}>
                        <Target size={22} className={styles.skillIcon} />
                        <span className={styles.skillTitle}>Product Strategy</span>
                        <span className={styles.skillSub}>Roadmapping, prioritization &amp; go-to-market planning</span>
                    </motion.div>

                    {/* Skill: AI & LLM */}
                    <motion.div className={`${styles.cell} ${styles.skillCard} ${styles.aSkill2}`} {...anim(0.3)} whileHover={{ y: -4 }}>
                        <Brain size={22} className={styles.skillIcon} />
                        <span className={styles.skillTitle}>Agentic AI &amp; LLM</span>
                        <span className={styles.skillSub}>Prompt engineering, AI workflows &amp; intelligent automation</span>
                    </motion.div>

                    {/* Stat — Productivity */}
                    <motion.div className={`${styles.cell} ${styles.statCell} ${styles.aStatProd}`} {...anim(0.35)} whileHover={{ y: -4, scale: 1.03 }}>
                        <TrendingUp size={20} className={styles.statIcon} />
                        <span className={styles.statNumber}><Counter value={25} suffix="%" isInView={isInView} /></span>
                        <span className={styles.statLabel}>Productivity Boost</span>
                    </motion.div>

                    {/* ─── ROW 3 ─── */}
                    {/* Stat — Associates */}
                    <motion.div className={`${styles.cell} ${styles.statCell} ${styles.aStatAssoc}`} {...anim(0.4)} whileHover={{ y: -4, scale: 1.03 }}>
                        <Users size={20} className={styles.statIcon} />
                        <span className={styles.statNumber}><Counter value={400} suffix="+" isInView={isInView} /></span>
                        <span className={styles.statLabel}>Associates Led</span>
                    </motion.div>

                    {/* Chips — 2 cols */}
                    <motion.div className={`${styles.cell} ${styles.aChips}`} {...anim(0.45)}>
                        <div className={styles.chipsWrap}>
                            {chips.map((chip, i) => (
                                <motion.span key={chip} className={styles.chip}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.45 + i * 0.04, duration: 0.35 }}
                                    whileHover={{ scale: 1.08, backgroundColor: 'rgba(183,198,194,0.18)' }}
                                >{chip}</motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stat — CSAT (under tools) - tools spans this row already */}
                </div>
            </div>
        </section>
    );
}
