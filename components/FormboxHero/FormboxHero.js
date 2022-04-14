import React, { useEffect, useContext, useRef } from 'react'
import ReactFlagsSelect from "react-flags-select";
import { useFormik, } from 'formik';
import * as Yup from 'yup';
import { Context } from '../../context/context';
import getCountryCodes from '../../utils/getCountryCodes';
import axios from 'axios';
import * as styles from './formbox-hero.module.scss';

function FormboxHero() {
    const { globalState, setSelectedCountry, setIsSubmitted, setAll } = useContext(Context);
    useEffect(() => {
        if (!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition(async (position) => {
                await axios.get(`https://ipapi.co/json/`).then(res => {
                    setSelectedCountry(res.data.country_code);
                }).catch(err => {
                    console.log(err);
                })
            }, () => {
                globalState.setSelectedCountry("DE");
            });
        }
    }, [])

    const schema = Yup.object().shape({
        companyName: Yup.string().required().matches(/^[aA-zZ\s]+$/).max(80),
        name: Yup.string().required().max(50),
        phone: Yup.number().required(),
        email: Yup.string().email().required(),
    })


    const { handleChange, handleSubmit, handleBlur, touched, values, errors } =
        useFormik({
            initialValues: {
                companyName: "",
                name: "",
                phone: "",
                email: "",
            },
            validationSchema: schema,
            onSubmit: (values) => {
                setAll(values);
                setIsSubmitted(true);
            },
        })

    return (
        <div className={styles.formboxContainer}>
            <h1 className={styles.mainTitle}>Find inbound call centers for your company</h1>
            <p className={styles.mainDescription}>Use our AI and Big Data driven call center sourcing solution</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.companyContainer}>
                    <label htmlFor="company_hero">Company</label>
                    <input
                        id='company_hero'
                        type="text"
                        name="companyName"
                        placeholder='Company'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.companyName && errors.companyName ? styles.errorInput : styles.correctInput}
                        value={values.companyName}
                    />
                </div>
                <div className={styles.fullNameContainer}>
                    <label htmlFor="full-name_hero">Name</label>
                    <input
                        id='full-name_hero'
                        type="text"
                        placeholder='Full Name'
                        name="name"
                        className={touched.name && errors.name ? styles.errorInput : styles.correctInput}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                </div>
                <div className={styles.phoneContainer}>
                    <label htmlFor="phone_hero">Phone</label>
                    <div className={styles.phoneInputContainer}>
                        <ReactFlagsSelect
                            selected={globalState.selectedCountry}
                            showSelectedLabel={false}
                            placeholder="&shy;"
                            selectedSize={20}
                            optionsSize={14}
                            className="menu-flags"
                            selectButtonClassName="menu-flags-button"
                            onSelect={(code) => setSelectedCountry(code)}
                        />
                        <input
                            id='phone_hero'
                            type="text"
                            name='phone'
                            placeholder={globalState.selectedCountry ? `+${getCountryCodes(globalState.selectedCountry)}` : ''}
                            className={touched.phone && errors.phone ? styles.errorInput : styles.correctInput}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                        />
                    </div>
                </div>
                <div className={styles.emailContainer}>
                    <label htmlFor="email_hero">Email</label>
                    <input
                        id='email_hero'
                        type="text"
                        name='email'
                        placeholder='name@mail.com'
                        className={touched.email && errors.email ? styles.errorInput : styles.correctInput}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                </div>
                <button type="submit">Get informed</button>
            </form>
        </div >
    )
}

export default FormboxHero