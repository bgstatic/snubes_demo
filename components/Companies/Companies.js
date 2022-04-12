import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { companies } from '../../const/layout-data'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import * as styles from "./companies.module.scss"

function Companies() {
    const { width } = useWindowDimensions();
    const flex_ALIGN = 820;
    return (
        <Row id={"companies-row"}
            className={width >= flex_ALIGN ? 'd-flex justify-content-evenly align-items-center' : "d-flex justify-content-center"}>
            {companies.map((company, index) => (
                <Col id={company.label} key={company.label} className={styles.companyCol} xs={6} sm={5} md={4} lg={2}>
                    <img src={company.path} alt={company.label} className={styles.logo} />
                </Col>
            ))}
        </Row>
    )
}

export default Companies