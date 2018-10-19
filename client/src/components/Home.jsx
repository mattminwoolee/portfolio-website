import React from 'react';
import styles from './../styles/Home.css';
import FadeIn from 'react-fade-in';

const Home = () => {
  return(
    <FadeIn>
      <div className={ styles.home }>
        <div className={ styles.container} >
          <h1>matt minwoo lee</h1>
        </div>
      </div>
    </FadeIn>
  )
}
  

export default Home;