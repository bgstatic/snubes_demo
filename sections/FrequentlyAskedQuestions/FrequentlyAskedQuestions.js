import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Formbox from '../../components/Formbox';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import * as styles from './frequentlyAskedQuestions.module.scss'

function FrequentlyAskedQuestions() {
    const background_ALIGN = 1024;
    const { width } = useWindowDimensions();
    return (
        <Container fluid={width <= background_ALIGN} className={styles.container} as="section" id='faq_section'>
            <div className={styles.textContainer}>
                <Row className={width <= background_ALIGN ? 'flex-column' : 'flex-column align-items-center'}>
                    <Col className={styles.mainTitleContainer} xs={10} sm={6} md={6} lg={10}>
                        <h1 className={styles.mainTitle}>Frequently Asked Questions</h1>
                    </Col>
                    <Col className={styles.textGroup} xs={12} sm={12} md={6} lg={10}>
                        <h2 className={styles.subtitle}>Are the call centers verified?</h2>
                        <p className={styles.description}>All call centers in our database are checked by quality assurance experts. We also take a look at their data and track the key performance indicators. In addition, clients rate call centers and share their customer experience.</p>
                    </Col>
                    <Col className={styles.textGroup} xs={12} sm={12} md={6} lg={10}>
                        <h2 className={styles.subtitle}>Which inbound services are offered at Snubes?</h2>
                        <p className={styles.description}>Our listed call centers offer a broad spectrum of customer services, such as technical support, first-level support, helpdesk, overflow/after-hours support, etc.</p>
                    </Col>
                    <Col className={styles.textGroup} xs={12} sm={12} md={6} lg={10}>
                        <h2 className={styles.subtitle}>Are there any costs?</h2>
                        <p className={styles.description}>The services of Snubes are free of charge and our call center experts advise you independently and personally. Together we strive to find the optimal solution.</p>
                    </Col>
                    <Col className={styles.bestOfInternet} xs={12} sm={12} md={6} lg={10}>
                        <img src="/images/sections/FrequentlyAskedQuestions/best-of-internet.jpg" />
                    </Col>
                </Row>
            </div>
            <div className={styles.formboxContainer}>
                <Formbox />
            </div>
        </Container>
    )
}

export default FrequentlyAskedQuestions