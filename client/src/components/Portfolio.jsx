import React from 'react';
import styles from './../styles/Portfolio.css';
import FadeIn from 'react-fade-in';

const Portfolio = () => {
  return(
    <FadeIn>
      <div className={ styles.grid }>
        <div className={ styles.cell } >
          <img src="/images/MVP.png"/>
          <div className={ styles.mask }>
            <div className={ styles.maskName }>Arena</div>
            <div className={ styles.maskDescription }>
              <p>An interactive formations app built for choreographers. Through this app, choreographers are able to visually create and store formations as well as respective transitions to previous and next.</p>
              <p>(ReactJS, Node.js/Express, MongoDB, Heroku, CSS)</p>
              <a href="https://youtu.be/xbU_jC_JQb4">Video Link</a>
              {/* <a href="https://mattminwoolee-arena-mvp.herokuapp.com/"> Deployed</a> */}
            </div>
          </div>
        </div>
        <div className={ styles.cellText } >
          Here are the three most recent full stack projects that I have worked on.
        </div>
        <div className={ styles.cell } >
          <img src='/images/SDC.png'/>
          <div className={ styles.mask }>
            <div className={ styles.maskName }>pleY</div>
            <div className={ styles.maskDescription }>
              <p>A full stack restaurant web application. For this project, I designed a back-end architecture for a micro service that could handle a high-traffic production environment after deployment.</p>
              <p>(ReactJS, Node.js/Express, PostgreSQL, AWS, Redis, NGINX)</p>
              <a href="https://youtu.be/jZ2XmmL-580">Video Link</a>
            </div>
          </div>
        </div>
        <div className={ styles.cell } >
          <img src="/images/FEC.png"/>
          <div className={ styles.mask }>
            <div className={ styles.maskName }>Parmezon</div>
            <div className={ styles.maskDescription }>
            <p>A full stack e-commerce web application. I designed a component architecture for the photo gallery and checkout panel to ensure a seamless experience of a product purchase.</p>
            <p>(ReactJS, Node.js/Express, MongoDB, Docker, AWS)</p>
            <a href="https://youtu.be/DipKKBxPBWc">Video Link</a>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
  

export default Portfolio;