import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/Top.module.css'

const Top = () => {
  return (
    <>
      <div className={styles.background}></div>
        <Container className={styles.top__container}>
            <Row className={styles.section__top}>
              <Col xs={12} md={6} className={styles.section__top_left}>
              <img src="/assets/mobile.png" alt="" className={`${styles.image} img-fluid`} />
              </Col>
              <Col xs={12} md={6} className={`${styles.section__top_right} shadow`}>
                <div className="plate_img_container">

                </div>
                <h1>Aaja Khaja!</h1>
                <h2>Let us serve you the food!</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum velit ut amet doloremque vel beatae, perferendis fugiat maxime.</p>
                <button className='btn btn-custom'>Download App</button>
              </Col>
            </Row>
        </Container>
    </>
  );
};

export default Top;
