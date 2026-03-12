'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Globe, Github } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
    {
        id: 1,
        title: 'AI-Powered Recruitment Platform',
        tagline: 'Intelligent resume screening using Google Gemini AI — reducing screening time by 90%',
        tags: ['Google Gemini AI', 'React', 'Supabase'],
        problem: 'Traditional recruitment processes required manual resume screening, consuming significant time and often missing qualified candidates due to keyword-based filtering.',
        role: 'Led full product development — from problem framing and architecture design to building the AI-powered screening pipeline with Google Gemini 2.0 Flash API integration.',
        process: 'Identified pain points → Designed system architecture → Built React + TypeScript dashboard → Integrated Google Gemini AI via n8n workflows → Implemented Y-shaped workflow for parallel processing → Supabase Auth with Google OAuth → Real-time candidate pipeline.',
        outcome: 'Reduced screening time by 90%. Built real-time candidate pipeline with AI-powered fit scoring (0-100%) and automated email workflows for interview invites and rejections. Structured AI responses generated in under 3 seconds.',
        tools: ['React', 'TypeScript', 'Supabase', 'Google Gemini AI', 'n8n'],
        websiteUrl: 'https://recruit-ai-sooty.vercel.app/',
        githubUrl: 'https://github.com/rishabh008009/Recruit-AI',
        image: '/recruit-ai-thumb.png',
    },
    {
        id: 2,
        title: 'Subscription Management Platform',
        tagline: 'Centralized dashboard for tracking recurring subscription payments',
        tags: ['Supabase', 'JavaScript', 'Google OAuth'],
        problem: 'Users had no centralized way to track recurring subscription payments across multiple services, leading to forgotten renewals, overspending, and lack of financial clarity.',
        role: 'Designed and built the complete web application — from responsive UI with 7 functional screens to backend integration with Supabase and Google OAuth authentication.',
        process: 'User research → Feature prioritization → Designed 7-screen UI → Built responsive front-end → Integrated Google OAuth + email fallback → PostgreSQL with row-level security → Spending analytics.',
        outcome: 'Delivered a comprehensive platform with 3-click navigation, automatic annual cost calculations, and spending statistics.',
        tools: ['HTML5', 'CSS3', 'JavaScript', 'Supabase', 'PostgreSQL'],
        websiteUrl: 'https://rishabh008009.github.io/subsentry-tracker/',
        githubUrl: 'https://github.com/rishabh008009/subsentry-tracker',
        image: '/subsentry-thumb.png',
    },
    {
        id: 3,
        title: 'Operations Excellence at Amazon',
        tagline: 'Led digital transformation increasing team productivity by 25%',
        tags: ['Process Optimization', 'Leadership', 'Data-Driven'],
        problem: 'Enterprise operations teams at Amazon faced challenges with productivity bottlenecks, high escalation rates, and inconsistent customer satisfaction scores.',
        role: 'Operations Team Manager leading strategic value realization, digital maturity programs, and cross-functional process optimization for 400+ associates.',
        process: 'Identified productivity gaps → Designed coaching frameworks → Orchestrated multi-workstream digital transformation → Built performance dashboards → Trained 400+ associates → Implemented Kaizen-focused strategies.',
        outcome: 'Increased team productivity by 25%, boosted CSAT by 10%, achieved 95% on-time delivery, reduced critical escalations by 10%, and increased account profitability by 12%.',
        tools: ['Power BI', 'Excel', 'Jira', 'Six Sigma', 'KPI Dashboards'],
        image: '',
    },
    {
        id: 4,
        title: 'Customer Resolution Analytics',
        tagline: 'Data-driven KPI dashboards reducing support inquiries by 30%',
        tags: ['Analytics', 'KPIs', 'Dashboards'],
        problem: 'Lack of visibility into digital performance trends made it difficult to proactively address customer issues and reduce incoming support volume.',
        role: 'Resolution Specialist establishing digital performance KPIs, building dashboards, and serving as primary contact for high-priority operational inquiries.',
        process: 'Analyzed support patterns → Designed comprehensive KPI dashboards → Identified trend-based insights → Collaborated with stakeholders → Delivered strategic business presentations.',
        outcome: 'Reduced support inquiries by 30%, achieved 85% resolution rate within 24-hour SLAs.',
        tools: ['Excel', 'Power BI', 'Reporting Tools', 'Analytics'],
        image: '',
    },
    {
        id: 5,
        title: 'Accessibility & UX Innovation',
        tagline: 'Enhanced site usability score by 25% through accessibility initiative',
        tags: ['UX', 'Accessibility', 'Innovation'],
        problem: 'Amazon\'s internal tools had usability gaps that impacted associate productivity and user satisfaction.',
        role: 'Spearheaded a high-impact accessibility initiative, identifying UX pain points and driving improvements across customer-facing processes.',
        process: 'UX audit → Accessibility gap analysis → Stakeholder alignment → Designed improvement roadmap → Implemented changes → Measured usability impact.',
        outcome: 'Enhanced site usability score by 25%, demonstrated high intellectual curiosity for UX innovation.',
        tools: ['UX Research', 'Figma', 'Canva', 'Analytics'],
        image: '',
    },
    {
        id: 6,
        title: 'Recruitment Process Transformation',
        tagline: 'Full-cycle recruitment system boosting successful hires by 50%',
        tags: ['HR Tech', 'Process Design', 'Assessment'],
        problem: 'The recruitment pipeline for customer service associates lacked robust screening, leading to inconsistent hire quality.',
        role: 'HR Recruiter managing full-cycle recruitment — screening, interviewing, and onboarding 680 customer service associates.',
        process: 'Analyzed hiring patterns → Designed behavioral + technical assessments → Implemented robust screening process → Conducted 680+ interviews.',
        outcome: 'Elevated service capacity by 40%, boosted successful hires by 50%, and enhanced team productivity by 35%.',
        tools: ['Assessment Tools', 'Excel', 'HR Systems', 'Interview Frameworks'],
        image: '',
    },
];

export default function Projects() {
    const [selected, setSelected] = useState(null);

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.inner}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                >
                    Projects
                </motion.h2>

                <div className={styles.grid}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            onClick={() => setSelected(project)}
                        >
                            <div className={styles.cardImage}>
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <div className={styles.placeholder}>
                                        <span className={styles.placeholderNum}>0{project.id}</span>
                                    </div>
                                )}
                                <div className={styles.hoverOverlay}>
                                    <div className={styles.viewBadge}>VIEW</div>
                                </div>
                            </div>
                            <div className={styles.cardInfo}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <div className={styles.cardTags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.cardTag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            className={styles.modal}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={() => setSelected(null)}>
                                <X size={20} />
                            </button>

                            <div className={styles.modalHeader}>
                                <h3 className={styles.modalTitle}>{selected.title}</h3>
                                <p className={styles.modalTagline}>{selected.tagline}</p>
                            </div>

                            <div className={styles.modalBody}>
                                <div className={styles.modalSection}>
                                    <h4>Problem</h4>
                                    <p>{selected.problem}</p>
                                </div>
                                <div className={styles.modalSection}>
                                    <h4>My Role</h4>
                                    <p>{selected.role}</p>
                                </div>
                                <div className={styles.modalSection}>
                                    <h4>Process</h4>
                                    <p>{selected.process}</p>
                                </div>
                                <div className={styles.modalSection}>
                                    <h4>Outcome</h4>
                                    <p>{selected.outcome}</p>
                                </div>
                                <div className={styles.modalSection}>
                                    <h4>Tools</h4>
                                    <div className={styles.toolList}>
                                        {selected.tools.map((tool) => (
                                            <span key={tool} className={styles.toolBadge}>{tool}</span>
                                        ))}
                                    </div>
                                </div>
                                {(selected.websiteUrl || selected.githubUrl) && (
                                    <div className={styles.modalLinks}>
                                        {selected.websiteUrl && (
                                            <a href={selected.websiteUrl} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                                                <Globe size={16} /> Live Website <ArrowUpRight size={14} />
                                            </a>
                                        )}
                                        {selected.githubUrl && (
                                            <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                                                <Github size={16} /> Source Code <ArrowUpRight size={14} />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
