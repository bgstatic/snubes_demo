import { Container } from 'react-bootstrap'
import * as styles from './card.module.scss'

const Card = ({ title, description, logoSource }) => {
    return (
        <Container className={styles.container}>
            <div className={styles.cardImageContainer}>
                <img loading='lazy' src={logoSource} alt={title} className={styles.logo} />
            </div>
            <div className={styles.cardTextContainer}>
                <h1 className={styles.cardTitle}>{title}</h1>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </Container >
    )
}

export default Card