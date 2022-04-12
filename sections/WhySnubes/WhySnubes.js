import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import * as styles from './whySnubes.module.scss'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { whySnubesInformation } from '../../const/layout-data'

function WhySnubes() {
    const background_ALIGN = 1024;
    const { width } = useWindowDimensions();
    return (
        <Container fluid className={styles.container} as="section" id='whysnubes_section'>
            <div className={styles.textContainer}>
                <Row className={width <= background_ALIGN ? 'flex-column' : 'flex-column align-items-center'}>
                    <Col className={styles.mainTitleContainer} xs={12} sm={12} md={6} lg={6}>
                        <h1 className={styles.mainTitle}>Why Snubes?</h1>
                    </Col>
                    {
                        whySnubesInformation.map((item, index) => (
                            <Col key={item.subtitle} className={styles.textGroup} xs={12} sm={12} md={6} lg={6}>
                                <h2 className={styles.subtitle}>{item.subtitle}</h2>
                                <p className={styles.description}>{item.description}</p>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </Container>
    )
}

export default WhySnubes