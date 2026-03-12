'use client';
import { motion } from 'framer-motion';
import styles from './Timeline.module.css';

const timeline = [
    {
        period: '2026 →',
        title: 'Product Manager — Ready',
        company: 'Transition Phase',
        description: 'Combining 8+ years of Amazon operations expertise with technical PM skills and AI product development. Ready to drive product strategy for AI-powered products.',
    },
    {
        period: '2025 – 2026',
        title: 'PM & Agentic AI — IIT Patna',
        company: 'IIT Patna',
        description: 'Completed intensive Product Management course specializing in Agentic AI. Built AI-powered recruitment platform and subscription management system.',
    },
    {
        period: '2020 – Present',
        title: 'Operations Team Manager',
        company: 'Amazon',
        description: 'Leading enterprise operations for 400+ associates. Increased team productivity by 25%, boosted CSAT by 10%, and achieved 95% on-time delivery.',
    },
    {
        period: '2019 – 2020',
        title: 'Resolution Specialist',
        company: 'Amazon',
        description: 'Established digital performance KPIs using dashboards, reducing support inquiries by 30%. Achieved 85% resolution rate within 24-hour SLAs.',
    },
    {
        period: '2018 – 2019',
        title: 'HR Recruiter',
        company: 'Amazon',
        description: 'Managed full-cycle recruitment of 680 customer service associates. Developed behavioral and technical assessments, boosting successful hires by 50%.',
    },
    {
        period: '2017 – 2018',
        title: 'Customer Service Associate',
        company: 'Amazon',
        description: 'Achieved a 98% customer satisfaction rate with one-call resolution process, cutting average resolution time by 50%. Resolved 200+ monthly inquiries.',
    },
];

export default function Timeline() {
    return (
        <section id="timeline" className={styles.timeline}>
            <div className={styles.inner}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.label}>Timeline</span>
                    <h2 className={styles.heading}>Career Journey</h2>
                </motion.div>

                <div className={styles.entries}>
                    {timeline.map((entry, i) => (
                        <motion.div
                            key={i}
                            className={styles.entry}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                        >
                            <div className={styles.entryLeft}>
                                <span className={styles.period}>{entry.period}</span>
                            </div>
                            <div className={styles.entryRight}>
                                <h3 className={styles.entryTitle}>{entry.title}</h3>
                                <span className={styles.company}>{entry.company}</span>
                                <p className={styles.entryDesc}>{entry.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
