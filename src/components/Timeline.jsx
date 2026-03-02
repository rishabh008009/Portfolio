'use client';
import { motion } from 'framer-motion';
import { Clock, Briefcase, GraduationCap, Rocket, Users, Award } from 'lucide-react';
import styles from './Timeline.module.css';

const events = [
    {
        year: '2026 →',
        title: 'Product Manager — Ready',
        description: 'Combining 8+ years of Amazon operations expertise with technical PM skills and AI product development. Ready to drive product strategy for AI-powered products.',
        icon: <Rocket size={20} />,
        color: '#e879f9',
        current: true,
    },
    {
        year: '2025 – 2026',
        title: 'PM & Agentic AI — IIT Patna',
        description: 'Completed intensive Product Management course specializing in Agentic AI. Built AI-powered recruitment platform and subscription management system.',
        icon: <GraduationCap size={20} />,
        color: '#c084fc',
    },
    {
        year: '2020 – Present',
        title: 'Operations Team Manager — Amazon',
        description: 'Leading enterprise operations for 400+ associates. Increased team productivity by 25%, boosted CSAT by 10%, and achieved 95% on-time delivery.',
        icon: <Rocket size={20} />,
        color: '#a78bfa',
    },
    {
        year: '2019 – 2020',
        title: 'Resolution Specialist — Amazon',
        description: 'Established digital performance KPIs using dashboards, reducing support inquiries by 30%. Achieved 85% resolution rate within 24-hour SLAs.',
        icon: <Award size={20} />,
        color: '#8b5cf6',
    },
    {
        year: '2018 – 2019',
        title: 'HR Recruiter — Amazon',
        description: 'Managed full-cycle recruitment of 680 customer service associates. Developed behavioral and technical assessments, boosting successful hires by 50%.',
        icon: <Briefcase size={20} />,
        color: '#6366f1',
    },
    {
        year: '2017 – 2018',
        title: 'Customer Service Associate — Amazon',
        description: 'Achieved a 98% customer satisfaction rate with one-call resolution process, cutting average resolution time by 50%. Resolved 200+ monthly inquiries.',
        icon: <Users size={20} />,
        color: '#3b82f6',
    },
];

export default function Timeline() {
    return (
        <section id="timeline" className={styles.timeline}>
            <div className="section">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label"><Clock size={14} /> Journey</p>
                    <h2 className="section-title">My Career Timeline</h2>
                    <p className="section-subtitle">
                        8+ years of progressive growth at Amazon — from customer service to operations leadership, now transitioning to product management.
                    </p>
                </motion.div>

                <div className={styles.track}>
                    <div className={styles.line} />
                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right}`}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={styles.dot} style={{ background: event.color, boxShadow: `0 0 16px ${event.color}55` }}>
                                {event.icon}
                            </div>
                            <div className={`glass-card ${styles.card} ${event.current ? styles.currentCard : ''}`}>
                                <span className={styles.year}>{event.year}</span>
                                <h3 className={styles.eventTitle}>{event.title}</h3>
                                <p className={styles.eventDesc}>{event.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
