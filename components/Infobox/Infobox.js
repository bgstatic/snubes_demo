import React from 'react'
import * as styles from './infobox.module.scss'

function Infobox() {
    return (
        <div className={styles.infoboxContainer}>
            <h1 className={styles.infoboxTitle}>Thank you for your request!</h1>
            <p className={styles.infoboxDescription}>You’ve taken the first step. Our experts will get in touch with you soon.</p>
            <div className={styles.line}></div>
            <div className={styles.infoboxList}>
                <p className={styles.label}>Company</p>
                <p className={styles.answer}>Google Inc.</p>
                <p className={styles.label}>Name</p>
                <p className={styles.answer}>Max Mustermann</p>
                <p className={styles.label}>Phone</p>
                <p className={styles.answer}>+49 1234 567 890</p>
                <p className={styles.label}>E-mail</p>
                <p className={styles.answer}>max.mustermann@mail.com</p>
            </div>
        </div>
    )
}

export default Infobox