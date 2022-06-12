import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../styles/Service.module.css'

const Service = () => {
  return (
    <div className={styles.service__container_bg}>
        <Container className={styles.service__container}>
            <Row>
                <Col xs={12} md={4}>
                    <img src="/assets/image-one.png" alt="" className={`${styles.service__img} img-fluid`} />
                    <h2>Best offer in Town</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veritatis nam doloremque, fugit nihil maiores. Sunt, laboriosam.</p>
                </Col>
                <Col xs={12} md={4}>
                <img src="/assets/image-two.png" alt="" className={`${styles.service__img} img-fluid`} />
                    <h2>Fastest Delivery</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veritatis nam doloremque, fugit nihil maiores. Sunt, laboriosam.</p>
                </Col>
                <Col xs={12} md={4}>
                <img src="/assets/image-three.png" alt="" className={`${styles.service__img} img-fluid`} />
                    <h2>Amazing Food</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veritatis nam doloremque, fugit nihil maiores. Sunt, laboriosam.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Service