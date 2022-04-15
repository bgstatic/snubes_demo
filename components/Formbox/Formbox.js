import { useContext } from 'react'
import { Context } from '../../context/context';
import ReactFlagsSelect from "react-flags-select";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as styles from './formbox.module.scss'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import getCountryCodes from '../../utils/getCountryCodes';

function Formbox() {

    const { width } = useWindowDimensions();

    const background_ALIGN = 1210;
    const background_ALIGN_MOBILE = 576;

    const { globalState, setSelectedCountry, setIsSubmitted, setAll } = useContext(Context);


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
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{(width <= background_ALIGN && width >= background_ALIGN_MOBILE) ? "Find inbound call centers for your company" : "Find inbound call centers"}</h1>
            </div>
            <div className={styles.inputContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.companyContainer}>
                        <label htmlFor="company">Company</label>
                        <input
                            id='company'
                            type="text"
                            name='companyName'
                            placeholder='Company'
                            className={touched.companyName && errors.companyName ? styles.errorInput : styles.correctInput}
                            value={values.companyName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.fullNameContainer}>
                        <label htmlFor="full-name">Name</label>
                        <input
                            id='full-name'
                            type="text"
                            name='name'
                            placeholder='Full Name'
                            className={touched.name && errors.name ? styles.errorInput : styles.correctInput}
                            value={values.name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.phoneContainer}>
                        <label htmlFor="phone">Phone</label>
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
                                id='phone'
                                type="text"
                                name='phone'
                                placeholder={globalState.selectedCountry ? `+${getCountryCodes(globalState.selectedCountry)}` : ''}
                                className={touched.phone && errors.phone ? styles.errorInput : styles.correctInput}
                                value={values.phone}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={styles.emailContainer}>
                        <label htmlFor="email">Email</label>
                        <input
                            id='email'
                            type="text"
                            name='email'
                            placeholder='name@mail.com'
                            value={values.email}
                            className={touched.email && errors.email ? styles.errorInput : styles.correctInput}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Get informed</button>
                </form>
            </div>
        </div>
    )
}

export default Formbox