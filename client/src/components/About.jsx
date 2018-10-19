import React from 'react';
import styles from './../styles/About.css';

const About = () => {
  return(
    <div className={ styles.about } >
      <div className={ styles.bioContainer } >
        <div className={ styles.photo } >
          Photo here
        </div>
        <div className={ styles.bio }>
          <p>Hi! I am a Full stack software engineer, urban choreo dancer, hobby enthusiast, and content creator.</p>
          <p>My resolve to pursue programming has always revolved around its magic to change the course of people’s lives. Whether the scale is large or small, I believe that technology can be used to enhance everyday patterns and to positively shape the direction we take. I am particularly interested in achieving this through designing beautiful interfaces, producing authentic content, and creating seamless user experiences. </p>
          <p>I try to navigate life as abundantly and actively as I can! When I’m not typing away on my computer, you can find me dancing on a competitive hip-hop team, snowboarding at Lake Tahoe & Mammoth, surfing along the SoCal coast, or traveling on my motorcycle.</p>     
        </div>
      </div>
      <div className={ styles.skillsContainer } >
        Skills here
      </div>
    </div>
  )
}
  

export default About;