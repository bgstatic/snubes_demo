import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import * as styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <Container className={styles.container}>
                <Row className='d-flex w-100'>
                    <Col className={styles.bestOfInternetCol} sm={3} md={3} lg={3} xl={3}>
                        <img src={"/images/sections/FrequentlyAskedQuestions/best-of-internet.jpg"} alt="best-of-internet-service" />
                    </Col>
                    <Col className={styles.footerNavigation} sm={4} md={3} lg={3} xl={3}>
                        <Link href={"/about-us"}>
                            <p>About Us</p>
                        </Link>
                        <Link href={"/become-a-partner"}>
                            <p>Become a Partner</p>
                        </Link>
                        <Link href={"/faq"}>
                            <p>FAQ</p>
                        </Link>
                    </Col>
                    <Col className={styles.footerNavigation} sm={4} md={3} lg={3} xl={3}>
                        <Link href={"/imprint"}>
                            <p>Imprint</p>
                        </Link>
                        <Link href={"/terms-and-conditions"}>
                            <p>Terms & Conditions</p>
                        </Link>
                        <Link href={"/privacy-policy"}>
                            <p>Privacy Policy</p>
                        </Link>
                    </Col>
                    <Col className={styles.footerNavigation} sm={4} md={3} lg={3} xl={3}>
                        <Link href={"mailto:support@snubes.com"}>
                            <p>support@snubes.com</p>
                        </Link>
                        <Link href={"tel:+4903055645327"}>
                            <p>+49 (0) 305 5645327</p>
                        </Link>
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