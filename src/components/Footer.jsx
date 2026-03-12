'use client';
import styles from './Footer.module.css';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <span className={styles.copyright}>© 2026 Rishabh Singh</span>
                <div className={styles.links}>
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={styles.link}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
