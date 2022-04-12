import React from 'react'
import * as styles from './hero.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import FormboxHero from '../../components/FormboxHero/'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { heroInformation } from '../../const/layout-data'

function Hero() {

    const background_ALIGN_MOBILE = 280
    const background_ALIGN = 1280;
    const { width } = useWindowDimensions();

    return (
        <Container fluid className={styles.heroContainer}>
            <Container fluid={width >= background_ALIGN_MOBILE && width <= background_ALIGN} className={styles.heroContentContainer}>
                <Row className={width >= background_ALIGN ? 'd-flex align-items-end' : 'd-flex flex-column align-items-center'}>
                    <Col className={styles.formboxCol} xs={12} sm={12} md={12} lg={12} xl={6}>
                        <FormboxHero />
                    </Col>
                    <Col className={styles.informationCol} xs={12} sm={12} md={12} lg={4} xl={6}>
                        <div className={styles.mainInformationContainer}>
                            <p className={styles.preInfo}>Welcome to Europe’s largest call center database </p>
                            <div className={styles.informationContainer}>
                                {
                                    heroInformation.map((item, index) => (
                                        <div key={item.label} className={styles.infoItemContainer}>
                                            <h1 className={styles.title}>{item.title}</h1>
                                            <p className={styles.description}>{item.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Hero