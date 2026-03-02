'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Award, Briefcase, Users } from 'lucide-react';
import styles from './Stats.module.css';

const stats = [
    { icon: <Briefcase size={24} />, value: 8, suffix: '+', label: 'Years at Amazon' },
    { icon: <TrendingUp size={24} />, value: 25, suffix: '%', label: 'Productivity Boost' },
    { icon: <Users size={24} />, value: 400, suffix: '+', label: 'Associates Led' },
    { icon: <Award size={24} />, value: 98, suffix: '%', label: 'CSAT Achieved' },
];

function AnimatedCounter({ value, suffix, isInView }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 2000;
        const step = value / (duration / 16);

        const timer = setInterval(() => {
            start += step;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <span className={styles.number}>
            {count}{suffix}
        </span>
    );
}

export default function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className={styles.stats} ref={ref}>
            <div className={styles.grid}>
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        className={styles.card}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -6, scale: 1.04 }}
                    >
                        <div className={styles.iconWrap}>{stat.icon}</div>
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                        <span className={styles.label}>{stat.label}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
