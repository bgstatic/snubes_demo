import Header from '../Header'
import Footer from '../Footer'
import { ContextProvider } from '../../context/context'
import * as styles from './layout.module.scss'

export default function Layout({ children }) {

    return (
        <>
            <ContextProvider>
                <Header />
                <main id="layout" className={`${styles.mainLayout}`}>
                    <>
                        {children}
                    </>
                </main>
                <Footer />
            </ContextProvider>

        </>
    )
}