import React from 'react';
import styles from './../styles/Portfolio.css';
import FadeIn from 'react-fade-in';

const Portfolio = () => {
  return(
    <FadeIn>
      <div className={ styles.grid }>
        <div className={ styles.cell } >
          <div className={ styles.mask }>
            <div className={ styles.maskName }>Project MVP</div>
            <div className={ styles.maskDescription }>https://youtu.be/xbU_jC_JQb4</div>
          </div>
          <img src="/images/MVP.png"/>
        </div>
        <div className={ styles.cellText } >
          Here are the three most recent full stack projects that I have worked on.
        </div>
        <div className={ styles.cell } >
          <div className={ styles.mask }>
            <div className={ styles.maskName }>Project SDC</div>
            <div className={ styles.maskDescription }>https://youtu.be/jZ2XmmL-580</div>
          </div>
          <img src='/images/SDC.png'/>
        </div>
        <div className={ styles.cell } >
          <div className={ styles.mask }>
            <div className={ styles.maskName }>Project FEC</div>
            <div className={ styles.maskDescription }>https://youtu.be/DipKKBxPBWc</div>
          </div>
          <img src="/images/FEC.png"/>
        </div>
      </div>
    </FadeIn>
  )
}
  

export default Portfolio;