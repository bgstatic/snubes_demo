import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from '../../components/Slider'
import Companies from '../../components/Companies';
import * as styles from "./testimonials.module.scss"

function Testimonials() {
    return (
        <Container fluid id='testimonials_section' className={styles.container} as="section">
            <Slider />
            <Companies />
        </Container>
    )
}

export default Testimonials