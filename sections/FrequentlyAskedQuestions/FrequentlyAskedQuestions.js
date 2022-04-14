import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Context } from '../../context/context';
import Formbox from '../../components/Formbox';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { frequentlyAskedQuestionsInformation } from '../../const/layout-data';
import * as styles from './frequentlyAskedQuestions.module.scss'

function FrequentlyAskedQuestions() {

    const { width } = useWindowDimensions();

    const background_ALIGN = 1024;

    const { globalState } = useContext(Context);

    return (
        !globalState.isSubmitted ? (
            <Container fluid={width <= background_ALIGN} id='faq_section' className={styles.container} as="section">
                <div className={styles.textContainer}>
                    <Row className={width <= background_ALIGN ? 'flex-column' : 'flex-column align-items-center'}>
                        <Col className={styles.mainTitleContainer} xs={10} sm={6} md={6} lg={10}>
                            <h1 className={styles.mainTitle}>Frequently Asked Questions</h1>
                        </Col>
                        {
                            frequentlyAskedQuestionsInformation.map((item, index) => (
                                <Col key={item.question} className={styles.textGroup} xs={12} sm={12} md={6} lg={10}>
                                    <h2 className={styles.subtitle}>{item.question}</h2>
                                    <p className={styles.description}>{item.answer}</p>
                                </Col>
                            ))
                        }
                        <Col className={styles.bestOfInternet} xs={12} sm={12} md={6} lg={10}>
                            <img src="/images/sections/FrequentlyAskedQuestions/best-of-internet.jpg" />
                        </Col>
                    </Row>
                </div>
                <div className={styles.formboxContainer}>
                    <Formbox />
                </div>
            </Container>
        ) : null
    )
}

export default FrequentlyAskedQuestions