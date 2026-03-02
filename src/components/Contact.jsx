'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Name is required';
        if (!form.email.trim()) errs.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
        if (!form.message.trim()) errs.message = 'Message is required';
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) {
            setErrors(errs);
            return;
        }
        setErrors({});
        const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
        window.open(`mailto:rishabh.singh08@live.com?subject=${subject}&body=${body}`, '_self');
    };

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    };

    return (
        <section id="contact">
            <div className="section">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label"><Mail size={14} /> Contact</p>
                    <h2 className="section-title">Let&apos;s Connect</h2>
                    <p className="section-subtitle">
                        Interested in working together or have a question? Drop me a message and I&apos;ll get back to you.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {/* Form */}
                    <motion.form
                        className={styles.form}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.field}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                            />
                            {errors.name && <span className={styles.error}>{errors.name}</span>}
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                            />
                            {errors.email && <span className={styles.error}>{errors.email}</span>}
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project or opportunity..."
                                className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                            />
                            {errors.message && <span className={styles.error}>{errors.message}</span>}
                        </div>
                        <button type="submit" className="btn btn-primary">
                            <Send size={16} /> Send Message
                        </button>
                    </motion.form>

                    {/* Info card */}
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <div className={`glass-card ${styles.infoCard}`}>
                            <h3 className={styles.infoTitle}>Get in Touch</h3>
                            <p className={styles.infoText}>
                                I&apos;m currently open to Product Manager opportunities, especially in
                                AI/ML, Agentic AI, and SaaS products. Based in Noida, India.
                                Let&apos;s build something amazing together.
                            </p>

                            <div className={styles.contactDetails}>
                                <p className={styles.contactItem}>
                                    📧 rishabh.singh08@live.com
                                </p>
                                <p className={styles.contactItem}>
                                    📍 Noida, India 201301
                                </p>
                            </div>

                            <div className={styles.socials}>
                                <a href="https://www.linkedin.com/in/rishabh-singh-1152899b/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://github.com/rishabh008009" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                                    <Github size={20} />
                                </a>
                                <a href="mailto:rishabh.singh08@live.com" className={styles.socialLink} aria-label="Email">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
