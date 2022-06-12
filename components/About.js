import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.about__container_bg}>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <img src="/assets/image-about.png" alt="" className="img-fluid" />
                </Col>
                <Col xs={12} md={6} className={styles.about__details}>
                    <div>
                        <h2>Best Store in Meerut</h2>
                        <b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita.</b>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat blanditiis omnis quam eius quisquam doloribus in quis adipisci, libero molestiae rem itaque mollitia recusandae sit impedit alias? Ratione, vel vero!</p>
                        <button className='btn btn-custom'>Explore More!</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About