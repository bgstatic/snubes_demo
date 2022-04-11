import React from 'react'
import * as styles from './formbox-hero.module.scss';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function FormboxHero() {
    return (
        <div className={styles.formboxContainer}>
            <h1 className={styles.mainTitle}>Find inbound call centers for your company</h1>
            <p className={styles.mainDescription}>Use our AI and Big Data driven call center sourcing solution</p>
            <form className={styles.form}>
                <div className={styles.companyContainer}>
                    <label for="company">Company</label>
                    <input
                        id='company'
                        type="text"
                        placeholder='Company'
                    />
                </div>
                <div className={styles.fullNameContainer}>
                    <label for="full-name">Name</label>
                    <input
                        id='full-name'
                        type="text"
                        placeholder='Full Name'
                    />
                </div>
                <div className={styles.phoneContainer}>
                    <label for="phone">Phone</label>
                    <div className={styles.phoneInputContainer}>
                        <select id="flags" name="flags">
                            <option value="germany">Ger</option>
                        </select>
                        <input
                            id='phone'
                            type="text"
                            placeholder='+49'
                        />
                    </div>
                </div>
                <div className={styles.emailContainer}>
                    <label for="email">Email</label>
                    <input
                        id='email'
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