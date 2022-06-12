import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contact__container_bg}>
        <Container className={styles.contact__container}>
            <Row>
                <Col xs={12} md={6}>
                    <h1>Aaja Khaja</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas quibusdam est mollitia tempora placeat.</p>
                    <div>
                        <span className="fa fa-facebook-square"></span>
                        <span className="fa fa-instagram"></span>
                        <span className="fa fa-linkedin-square"></span>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <b>Links</b>
                    <br />
                    <br />
                    <h6>Overview</h6>
                    <h6>Social Media</h6>
                    <h6>Contact</h6>
                </Col>
                <Col xs={12} md={3}>
                    <b>Company</b>
                    <br />
                    <br />
                    <h6>Overview</h6>
                    <h6>Social Media</h6>
                    <h6>Contact</h6>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contact