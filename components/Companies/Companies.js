import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { companies } from '../../const/layout-data'

import * as styles from "./companies.module.scss"

function Companies() {
    return (
        <Row className='d-flex justify-content-center align-items-center mt-4'>
            {companies.map((company, index) => (
                <Col key={company.label} className={styles.company} xs={6} sm={5} md={4} lg={2}>
                    <img src={company.path} alt={company.label} className={styles.logo} />
                </Col>
            ))}
        </Row>
    )
}

export default Companies