import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import * as styles from './layout.module.scss'

export default function Layout({ children }) {

    return (
        <>
            <Header />
            <main id="layout" className={`${styles.mainLayout}`}>
                <>
                    {children}
                </>
            </main>
            {/* <Footer /> */}
        </>
    )
}