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
        title: 'HackArena 3.0 — Masai Verse × Axes Systems',
        issuer: 'Masai Verse · Axes Systems',
        date: 'February 6–7, 2026',
        issuedDate: 'March 10, 2026',
        credentialId: 'MtzVpbBtuY',
        verifyUrl: 'https://verify.masaischool.com/certificate/MtzVpbBtuY',
        image: '/cert-hackarena.png',
        description: 'Participation Certificate for successfully participating in HackArena 3.0 held on 6th & 7th February, 2026. Recognized for dedication and creativity.',
        tags: ['Hackathon', 'Masai Verse', 'Axes Systems'],
        status: 'issued',
    },
];

export default function Certifications() {
    const [preview, setPreview] = useState(null);

    return (
        <section id="certifications" className={styles.certifications}>
            <div className={styles.inner}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.label}>Certifications</span>
                    <h2 className={styles.heading}>
                        Credentials
                        <br />
                        <span className="text-outline">& Achievements</span>
                    </h2>
                </motion.div>

                <div className={styles.grid}>
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.id}
                            className={`${styles.card} ${cert.status === 'coming-soon' ? styles.comingSoon : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                        >
                            {cert.status === 'coming-soon' ? (
                                <div className={styles.comingSoonContent}>
                                    <Clock size={32} strokeWidth={1} className={styles.comingSoonIcon} />
                                    <h3 className={styles.cardTitle}>{cert.title}</h3>
                                    <p className={styles.cardDesc}>{cert.description}</p>
                                </div>
                            ) : (
                                <>
                                    {cert.image && (
                                        <div className={styles.certImage} onClick={() => setPreview(cert)}>
                                            <img src={cert.image} alt={cert.title} />
                                            <div className={styles.imageOverlay}>
                                                <div className={styles.viewBadge}>VIEW</div>
                                            </div>
                                        </div>
                                    )}
                                    <div className={styles.cardBody}>
                                        <div className={styles.statusBadge}>
                                            <ShieldCheck size={12} /> Verified
                                        </div>
                                        <h3 className={styles.cardTitle}>{cert.title}</h3>
                                        <p className={styles.cardIssuer}>{cert.issuer}</p>
                                        <p className={styles.cardDate}>Issued: {cert.issuedDate}</p>
                                        <p className={styles.cardDesc}>{cert.description}</p>
                                        {cert.tags.length > 0 && (
                                            <div className={styles.tags}>
                                                {cert.tags.map(tag => (
                                                    <span key={tag} className={styles.tag}>{tag}</span>
                                                ))}
                                            </div>
                                        )}
                                        <div className={styles.cardFooter}>
                                            <span className={styles.credentialId}>ID: {cert.credentialId}</span>
                                            {cert.verifyUrl && (
                                                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className={styles.verifyLink}>
                                                    Verify <ExternalLink size={12} />
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

            {/* Preview Modal */}
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
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={() => setPreview(null)}>
                                <X size={20} />
                            </button>
                            <img src={preview.image} alt={preview.title} className={styles.modalImage} />
                            <div className={styles.modalInfo}>
                                <h3>{preview.title}</h3>
                                <p>{preview.issuer} · {preview.issuedDate}</p>
                                <div className={styles.modalActions}>
                                    <span className={styles.credentialId}>ID: {preview.credentialId}</span>
                                    <a href={preview.verifyUrl} target="_blank" rel="noopener noreferrer" className={styles.verifyBtn}>
                                        <ShieldCheck size={14} /> Verify Certificate
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
