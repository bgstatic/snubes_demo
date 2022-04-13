import React from 'react'
import * as styles from './formbox-hero.module.scss';

function FormboxHero() {
    return (
        <div className={styles.formboxContainer}>
            <h1 className={styles.mainTitle}>Find inbound call centers for your company</h1>
            <p className={styles.mainDescription}>Use our AI and Big Data driven call center sourcing solution</p>
            <form className={styles.form}>
                <div className={styles.companyContainer}>
                    <label htmlFor="company_hero">Company</label>
                    <input
                        id='company_hero'
                        type="text"
                        placeholder='Company'
                    />
                </div>
                <div className={styles.fullNameContainer}>
                    <label htmlFor="full-name_hero">Name</label>
                    <input
                        id='full-name_hero'
                        type="text"
                        placeholder='Full Name'
                    />
                </div>
                <div className={styles.phoneContainer}>
                    <label htmlFor="phone_hero">Phone</label>
                    <div className={styles.phoneInputContainer}>
                        <select id="flags" name="flags">
                            <option value="germany">G</option>
                        </select>
                        <input
                            id='phone_hero'
                            type="text"
                            placeholder='+49'
                        />
                    </div>
                </div>
                <div className={styles.emailContainer}>
                    <label htmlFor="email_hero">Email</label>
                    <input
                        id='email_hero'
                        type="text"
                        placeholder='name@mail.com'
                    />
                </div>
                <button type="submit">Get informed</button>
            </form>
        </div>
    )
}

export default FormboxHero