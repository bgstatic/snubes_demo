import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import * as styles from './footer.module.scss'
import { footerNavigation } from '../../const/layout-data'

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <Container className={styles.container}>
                <Row className='d-flex w-100'>
                    <Col className={styles.bestOfInternetCol} sm={3} md={3} lg={3} xl={3}>
                        <img loading='lazy' src={"/images/sections/FrequentlyAskedQuestions/best-of-internet.webp"} alt="best-of-internet-service" width={120} height={120} />
                    </Col>
                    <Col className={styles.footerNavigation} sm={4} md={3} lg={3} xl={3}>
                        {
                            footerNavigation.firstColumn.map((item, index) => (
                                <Link key={item.label} href={item.url}>
                                    <p>{item.label}</p>
                                </Link>
                            ))
                        }
                    </Col>
                    <Col className={styles.footerNavigation} sm={4} md={3} lg={3} xl={3}>
                        {
                            footerNavigation.secondColumn.map((item, index) => (
                                <Link key={item.label} href={item.url}>
                                    <p>{item.label}</p>
                                </Link>
                            ))
                        }
                    </Col>
                    <Col className={styles.footerNavigation} sm={4} md={3} lg={3} xl={3}>
                        {
                            footerNavigation.thirdColumn.map((item, index) => (
                                <Link key={item.label} href={item.url}>
                                    <p>{item.label}</p>
                                </Link>
                            ))
                        }
                        <div className={styles.footerIconContainer}>
                            {/* <img className={styles.footerLogo} src="/images/components/Footer/linkedin.jpg" alt="linkedin" /> */}
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className={styles.footerCaption}>
                <p>© 2022 Snubes GmbH All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer