import React from 'react';
import styles from './PageHeader.module.css';

const PageHeader = ({ title, subtitle }) => {
    return (
        <div className={styles.pageHeader}>
            <div className="container">
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHeader;