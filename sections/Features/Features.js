import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from '../../components/Card'
import * as styles from './features.module.scss'

function Features() {
    return (
        <Container className={styles.container}>
            <Row className="justify-content-md-center" xs={12} sm={12} md={12} lg={12} xl={12}>
                <Col className={styles.cardContainer} xs={12} sm={12} md={4} lg={4} xl={4} >
                    <Card
                        title="Sign up for free"
                        description="Signing up and setting up your project takes less than 5 minutes"
                        logoSource={'/images/sections/Features/signup.svg'}
                    />
                </Col>
                <Col className={styles.cardContainer} xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Card
                        title="Source smarter"
                        description="Our data-based AI and our experts will help you find exactly what you are looking for"
                        logoSource={'/images/sections/Features/source-logo.svg'}
                    />
                </Col>
                <Col className={styles.cardContainer} xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Card
                        title="Receive offers"
                        description="With our insights you always receive high-quality proposals at the best price"
                        logoSource={'/images/sections/Features/offers.svg'}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Features