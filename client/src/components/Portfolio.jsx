import React from 'react';
import styles from './../styles/Portfolio.css';

const Portfolio = () => {
  return(
    <div className={ styles.grid }>
      <div className={ styles.cell } >
        <div className={ styles.mask }>Project MVP: https://youtu.be/xbU_jC_JQb4</div>
        <img src="/images/MVP.png"/>
      </div>
      <div className={ styles.cellText } >
        Here are the three most recent full stack projects that I have worked on.
      </div>
      <div className={ styles.cell } >
        <div className={ styles.mask }>Project SDC: https://youtu.be/jZ2XmmL-580</div>
        <img src='/images/SDC.png'/>
      </div>
      <div className={ styles.cell } >
        <div className={ styles.mask }>Project FEC: https://youtu.be/DipKKBxPBWc</div>
        <img src="/images/FEC.png"/>
      </div>
    </div>
  )
}
  

export default Portfolio;