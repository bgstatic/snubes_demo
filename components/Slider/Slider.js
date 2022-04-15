import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import * as styles from './slider.module.scss';

function Slider() {

    return (
        <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className={styles.swiper}>
            <SwiperSlide className={styles.slideTest}>
                <Container className={styles.sliderContainer}>
                    <img loading="lazy" className={styles.sliderLogo} src={"/images/components/Slider/talixo-black.jpg"} alt="talixo" />
                    <p className={styles.sliderDescription}>“Finding a suitable outsourcing service provider through Snubes was very easy and our personal consultant helped us every step of the way. After a short time we had good offers on the table. An on-site visit confirmed the positive impression and we have now found a matching partner. Thank you for your great support, which has helped us a lot in the selection process.”</p>
                    <p className={styles.sliderCaption}><strong>Jan Brenneke,</strong> VP Operations</p>
                </Container>
            </SwiperSlide>
            <SwiperSlide>
                <Container className={styles.sliderContainer}>
                    <img loading="lazy" className={styles.sliderLogo} src={"/images/components/Slider/talixo-black.jpg"} alt="talixo" />
                    <p className={styles.sliderDescription}>“Finding a suitable outsourcing service provider through Snubes was very easy and our personal consultant helped us every step of the way. After a short time we had good offers on the table. An on-site visit confirmed the positive impression and we have now found a matching partner. Thank you for your great support, which has helped us a lot in the selection process.”</p>
                    <p className={styles.sliderCaption}><strong>Jan Brenneke,</strong> VP Operations</p>
                </Container>
            </SwiperSlide>
            <SwiperSlide>
                <Container className={styles.sliderContainer}>
                    <img loading="lazy" className={styles.sliderLogo} src={"/images/components/Slider/talixo-black.jpg"} alt="talixo" />
                    <p className={styles.sliderDescription}>“Finding a suitable outsourcing service provider through Snubes was very easy and our personal consultant helped us every step of the way. After a short time we had good offers on the table. An on-site visit confirmed the positive impression and we have now found a matching partner. Thank you for your great support, which has helped us a lot in the selection process.”</p>
                    <p className={styles.sliderCaption}><strong>Jan Brenneke,</strong> VP Operations</p>
                </Container>
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider