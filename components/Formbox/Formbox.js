import React from 'react'
import * as styles from './formbox.module.scss'
import useWindowDimensions from '../../hooks/useWindowDimensions'
function Formbox() {
    const { width } = useWindowDimensions();
    const background_ALIGN = 1210;
    const background_ALIGN_MOBILE = 576;
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{(width <= background_ALIGN && width >= background_ALIGN_MOBILE) ? "Find inbound call centers for your company" : "Find inbound call centers"}</h1>
            </div>
            <div className={styles.inputContainer}>
                <form className={styles.form}>
                    <div className={styles.companyContainer}>
                        <label htmlFor="company">Company</label>
                        <input
                            id='company'
                            type="text"
                            placeholder='Company'
                        />
                    </div>
                    <div className={styles.fullNameContainer}>
                        <label htmlFor="full-name">Name</label>
                        <input
                            id='full-name'
                            type="text"
                            placeholder='Full Name'
                        />
                    </div>
                    <div className={styles.phoneContainer}>
                        <label htmlFor="phone">Phone</label>
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
                        <label htmlFor="email">Email</label>
                        <input
                            id='email'
                            type="text"
                            placeholder='name@mail.com'
                        />
                    </div>
                    <button type="submit">Get informed</button>
                </form>
            </div>
        </div>
    )
}

export default Formbox