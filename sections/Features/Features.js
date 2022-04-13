import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from '../../components/Card'
import { featuresInformation } from '../../const/layout-data'
import * as styles from './features.module.scss'


function Features() {
    return (
        <Container id="features_section" className={styles.container} as="section">
            <Row>
                {
                    featuresInformation.map((item, index) => (
                        <Col key={item.title} className={styles.cardContainer} xs={12} sm={12} md={4} lg={4} xl={4} >
                            <Card
                                title={item.title}
                                description={item.description}
                                logoSource={item.logoSource}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Features