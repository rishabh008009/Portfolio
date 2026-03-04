'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ExternalLink, X, Layers, Github, Globe } from 'lucide-react';
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
        process: 'User research → Feature prioritization → Designed 7-screen UI (login, dashboard, subscription forms, reminders) → Built responsive front-end → Integrated Google OAuth + email fallback → PostgreSQL with row-level security → Spending analytics.',
        outcome: 'Delivered a comprehensive platform with 3-click navigation, automatic annual cost calculations, and spending statistics. Implemented secure authentication and row-level security for data privacy.',
        tools: ['HTML5', 'CSS3', 'JavaScript', 'Supabase', 'PostgreSQL'],
        websiteUrl: 'https://rishabh008009.github.io/subsentry-tracker/',
        githubUrl: 'https://github.com/rishabh008009/subsentry-tracker',
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
    },
    {
        id: 4,
        title: 'Customer Resolution Analytics',
        tagline: 'Data-driven KPI dashboards reducing support inquiries by 30%',
        tags: ['Analytics', 'KPIs', 'Dashboards'],
        problem: 'Lack of visibility into digital performance trends made it difficult to proactively address customer issues and reduce incoming support volume.',
        role: 'Resolution Specialist establishing digital performance KPIs, building dashboards, and serving as primary contact for high-priority operational inquiries.',
        process: 'Analyzed support patterns → Designed comprehensive KPI dashboards → Identified trend-based insights → Collaborated with stakeholders → Delivered strategic business presentations → Achieved 85% resolution rate within 24-hour SLAs.',
        outcome: 'Reduced support inquiries by 30%, achieved 85% resolution rate within 24-hour SLAs, and contributed to 18% market share growth through strategic business presentations.',
        tools: ['Excel', 'Power BI', 'Reporting Tools', 'Analytics'],
    },
    {
        id: 5,
        title: 'Accessibility & UX Innovation',
        tagline: 'Enhanced site usability score by 25% through accessibility initiative',
        tags: ['UX', 'Accessibility', 'Innovation'],
        problem: 'Amazon\'s internal tools had usability gaps that impacted associate productivity and user satisfaction, particularly for accessibility-focused workflows.',
        role: 'Spearheaded a high-impact accessibility initiative, identifying UX pain points and driving improvements across customer-facing processes.',
        process: 'UX audit → Accessibility gap analysis → Stakeholder alignment → Designed improvement roadmap → Implemented changes → Measured usability impact → Iterated based on feedback.',
        outcome: 'Enhanced site usability score by 25%, demonstrated high intellectual curiosity for UX innovation, and identified new use cases for emerging technology.',
        tools: ['UX Research', 'Figma', 'Canva', 'Analytics'],
    },
    {
        id: 6,
        title: 'Recruitment Process Transformation',
        tagline: 'Full-cycle recruitment system boosting successful hires by 50%',
        tags: ['HR Tech', 'Process Design', 'Assessment'],
        problem: 'The recruitment pipeline for customer service associates lacked robust screening, leading to inconsistent hire quality and high onboarding costs.',
        role: 'HR Recruiter managing full-cycle recruitment — screening, interviewing, and onboarding 680 customer service associates.',
        process: 'Analyzed hiring patterns → Designed behavioral + technical assessments → Implemented robust screening process → Conducted 680+ interviews → Tracked hire quality metrics → Iterated on assessment criteria.',
        outcome: 'Elevated service capacity by 40%, boosted successful hires by 50%, and enhanced team productivity by 35% through improved screening processes.',
        tools: ['Assessment Tools', 'Excel', 'HR Systems', 'Interview Frameworks'],
    },
];

export default function Projects() {
    const [selected, setSelected] = useState(null);

    return (
        <section id="projects">
            <div className="section">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label"><Folder size={14} /> Projects</p>
                    <h2 className="section-title">What I&apos;ve Built</h2>
                    <p className="section-subtitle">
                        Real projects from my Product Management journey — blending 8+ years of Amazon
                        operations expertise with AI-powered product development.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className={`glass-card ${styles.card}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            onClick={() => setSelected(project)}
                        >
                            <div className={styles.cardThumb}>
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className={styles.thumbImg} />
                                ) : (
                                    <Layers size={32} strokeWidth={1.2} />
                                )}
                            </div>
                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.cardTagline}>{project.tagline}</p>
                            <div className={styles.tags}>
                                {project.tags.map((tag) => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            {(project.websiteUrl || project.githubUrl) && (
                                <div className={styles.projectLinks}>
                                    {project.websiteUrl && (
                                        <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink} onClick={(e) => e.stopPropagation()}>
                                            <Globe size={14} /> Live
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink} onClick={(e) => e.stopPropagation()}>
                                            <Github size={14} /> GitHub
                                        </a>
                                    )}
                                </div>
                            )}
                            <button className={styles.cardCta}>
                                View Case Study <ExternalLink size={14} />
                            </button>
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
                            initial={{ opacity: 0, scale: 0.92, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 40 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={() => setSelected(null)}>
                                <X size={20} />
                            </button>

                            <div className={styles.modalHeader}>
                                <h3 className={styles.modalTitle}>{selected.title}</h3>
                                <p className={styles.modalTagline}>{selected.tagline}</p>
                                <div className={styles.tags}>
                                    {selected.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.modalBody}>
                                <div className={styles.modalSection}>
                                    <h4>🔍 Problem</h4>
                                    <p>{selected.problem}</p>
                                </div>
                                <div className={styles.modalSection}>
                                    <h4>🎯 My Role</h4>
                                    <p>{selected.role}</p>
                                </div>
                                <div className={styles.modalSection}>
                                    <h4>⚙️ Process</h4>
                                    <p>{selected.process}</p>
                                </div>
                                <div className={styles.modalSection}>
                                    <h4>📈 Outcome</h4>
                                    <p>{selected.outcome}</p>
                                </div>
                                <div className={styles.modalSection}>
                                    <h4>🛠️ Tools Used</h4>
                                    <div className={styles.toolList}>
                                        {selected.tools.map((tool) => (
                                            <span key={tool} className={styles.toolBadge}>{tool}</span>
                                        ))}
                                    </div>
                                </div>
                                {(selected.websiteUrl || selected.githubUrl) && (
                                    <div className={styles.modalSection}>
                                        <h4>🔗 Links</h4>
                                        <div className={styles.projectLinks}>
                                            {selected.websiteUrl && (
                                                <a href={selected.websiteUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.modalLink}`}>
                                                    <Globe size={16} /> View Live Website
                                                </a>
                                            )}
                                            {selected.githubUrl && (
                                                <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-outline ${styles.modalLink}`}>
                                                    <Github size={16} /> View Source Code
                                                </a>
                                            )}
                                        </div>
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
