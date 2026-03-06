'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, X, Clock } from 'lucide-react';
import styles from './Certifications.module.css';

const certifications = [
    {
        id: 1,
        title: 'HackFest 2.0 — GDG Cloud New Delhi',
        issuer: 'Google Developer Groups Cloud · New Delhi',
        date: 'February 21–22, 2026',
        issuedDate: 'March 5, 2026',
        credentialId: 'CERT-08DDE9F0-7C7C-46A1',
        verifyUrl: 'https://www.creadefy.com/verify/CERT-08DDE9F0-7C7C-46A1',
        image: '/cert-google-hackathon.png',
        description: 'Certificate of Participation for exemplifying dedication and innovative spirit at HackFest 2.0, a 24-hour global online hackathon organized by GDG Cloud New Delhi in collaboration with Turgon AI.',
        tags: ['Google Cloud', 'Hackathon', 'Agentic AI'],
        status: 'issued',
    },
    {
        id: 2,
        title: 'Coming Soon',
        issuer: 'Certificate pending',
        date: '',
        issuedDate: '',
        credentialId: '',
        verifyUrl: '',
        image: '',
        description: 'Another hackathon certification is on the way. Stay tuned!',
        tags: [],
        status: 'coming-soon',
    },
];

export default function Certifications() {
    const [preview, setPreview] = useState(null);

    return (
        <section id="certifications">
            <div className="section">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label"><Award size={14} /> Certifications</p>
                    <h2 className="section-title">Credentials &amp; Achievements</h2>
                    <p className="section-subtitle">
                        Verified certifications from hackathons, cloud platforms, and industry programs.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.id}
                            className={`glass-card ${styles.card} ${cert.status === 'coming-soon' ? styles.comingSoon : ''}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                        >
                            {cert.status === 'coming-soon' ? (
                                <div className={styles.comingSoonContent}>
                                    <div className={styles.comingSoonIcon}>
                                        <Clock size={40} strokeWidth={1.2} />
                                    </div>
                                    <h3 className={styles.cardTitle}>{cert.title}</h3>
                                    <p className={styles.cardIssuer}>{cert.description}</p>
                                </div>
                            ) : (
                                <>
                                    {cert.image && (
                                        <div
                                            className={styles.certImage}
                                            onClick={() => setPreview(cert)}
                                        >
                                            <img src={cert.image} alt={cert.title} />
                                            <div className={styles.imageOverlay}>
                                                <span>Click to preview</span>
                                            </div>
                                        </div>
                                    )}
                                    <div className={styles.cardBody}>
                                        <div className={styles.statusBadge}>
                                            <ShieldCheck size={14} /> Verified
                                        </div>
                                        <h3 className={styles.cardTitle}>{cert.title}</h3>
                                        <p className={styles.cardIssuer}>{cert.issuer}</p>
                                        <p className={styles.cardDate}>Issued: {cert.issuedDate}</p>
                                        <p className={styles.cardDescription}>{cert.description}</p>

                                        {cert.tags.length > 0 && (
                                            <div className={styles.tags}>
                                                {cert.tags.map(tag => (
                                                    <span key={tag} className={styles.tag}>{tag}</span>
                                                ))}
                                            </div>
                                        )}

                                        <div className={styles.cardFooter}>
                                            <span className={styles.credentialId}>
                                                ID: {cert.credentialId}
                                            </span>
                                            {cert.verifyUrl && (
                                                <a
                                                    href={cert.verifyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.verifyLink}
                                                >
                                                    Verify <ExternalLink size={14} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certificate Preview Modal */}
            <AnimatePresence>
                {preview && (
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setPreview(null)}
                    >
                        <motion.div
                            className={styles.modal}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={() => setPreview(null)}>
                                <X size={20} />
                            </button>
                            <img
                                src={preview.image}
                                alt={preview.title}
                                className={styles.modalImage}
                            />
                            <div className={styles.modalInfo}>
                                <h3>{preview.title}</h3>
                                <p>{preview.issuer} · {preview.issuedDate}</p>
                                <div className={styles.modalActions}>
                                    <span className={styles.credentialId}>ID: {preview.credentialId}</span>
                                    <a
                                        href={preview.verifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        <ShieldCheck size={16} /> Verify Certificate
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
