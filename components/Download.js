import React from "react";
import { Container } from "react-bootstrap";
import styles from '../styles/Download.module.css'

const Download = () => {
  return (
    <div className={styles.download__container_bg}>
      <Container className={styles.download__container}>
        <h3>Get Food with Us!</h3>
        <h3>Download the App</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eligendi cupiditate temporibus nulla aut suscipit repellendus inventore id delectus ut? Cupiditate quos voluptates illo aliquid eligendi. Excepturi vero maiores corporis?</p>
      </Container>
      <Container className={styles.download__image}>
        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="" className="img-fluid" />
        <img src="https://i2.wp.com/mofc.unic.ac.cy/wp-content/uploads/revslider/decentralized-2020-home-slider1-12/get-it-on-app-store.png?ssl=1" alt="" className="img-fluid" />
      </Container>
    </div>
  );
};

export default Download;
