import React, { useContext } from 'react'
import { Context } from '../../context/context'
import getCountryCodes from '../../utils/getCountryCodes'
import * as styles from './infobox.module.scss'

function Infobox() {
    const { globalState } = useContext(Context)
    return (
        <div className={styles.infoboxContainer}>
            <h1 className={styles.infoboxTitle}>Thank you for your request!</h1>
            <p className={styles.infoboxDescription}>You’ve taken the first step. Our experts will get in touch with you soon.</p>
            <div className={styles.line}></div>
            <div className={styles.infoboxList}>
                <p className={styles.label}>Company</p>
                <p className={styles.answer}>{globalState.companyName}</p>
                <p className={styles.label}>Name</p>
                <p className={styles.answer}>{globalState.name}</p>
                <p className={styles.label}>Phone</p>
                <p className={styles.answer}>{`+${getCountryCodes(globalState.selectedCountry)} ${globalState.phone}`}</p>
                <p className={styles.label}>E-mail</p>
                <p className={styles.answer}>{globalState.email}</p>
            </div>
        </div>
    )
}

export default Infobox