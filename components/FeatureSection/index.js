import React from "react";
import styles from './style.module.scss';

const FeatureSection = ({ title, description, icon, color, ...props }) => {
    return (
        <section className={styles.cardFeature}
                 style={{
                    '--borderTopColor': color,
                 }}
                 {...props}
        >
            <h2 className={styles.title}>
                {title}
            </h2>
            <p className={styles.description}>
                {description}
            </p>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
        </section>
    );
};

export default FeatureSection;
