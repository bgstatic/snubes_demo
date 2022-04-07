import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import * as styles from './whySnubes.module.scss'
import useWindowDimensions from '../../hooks/useWindowDimensions';

function WhySnubes() {
    const background_ALIGN = 1024;
    const { width } = useWindowDimensions();
    return (
        <Container fluid className={styles.container}>
            <div className={styles.textContainer}>
                <Row className={width <= background_ALIGN ? 'flex-column' : 'flex-column align-items-center'}>
                    <Col className={styles.mainTitleContainer} xs={12} sm={12} md={6} lg={6}>
                        <h1 className={styles.mainTitle}>Why Snubes?</h1>
                    </Col>
                    <Col className={styles.textGroup} xs={12} sm={12} md={6} lg={6}>
                        <h2 className={styles.subtitle}>Trusted Know-How</h2>
                        <p className={styles.description}>We have more than 20 years of experience and continuously check call centers for their quality and capabilities. Customers like Allianz trust Snubes industry knowledge.</p>
                    </Col>
                    <Col className={styles.textGroup} xs={12} sm={12} md={6} lg={6}>
                        <h2 className={styles.subtitle}>Time and cost savings</h2>
                        <p className={styles.description}>With Snubes you can easily compare prices, quality and availability, and find more potential suppliers. Reach your goal faster and save resources.</p>
                    </Col>
                    <Col className={styles.textGroup} xs={12} sm={12} md={6} lg={6}>
                        <h2 className={styles.subtitle}>Satisfaction guaranteed</h2>
                        <p className={styles.description}>We offer a validated data-based approach to procurement, rather than awarding contracts only based on the lowest price, an existing relationship or "gut feeling".</p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default WhySnubes