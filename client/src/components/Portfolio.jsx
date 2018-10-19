import React from 'react';
import styles from './../styles/Portfolio.css';

const Portfolio = () => {
  return(
    <div className={ styles.grid }>
      <div className={ styles.cell } >
        Project SDC
      </div>
      <div className={ styles.cellText } >
        Here are the three most recent full stack projects that I have worked on.
      </div>
      <div className={ styles.cell } >
        Project MVP
      </div>
      <div className={ styles.cell } >
        Project FEC
      </div>
    </div>
  )
}
  

export default Portfolio;