import React from 'react';
import styles from './../styles/About.css';
import FadeIn from 'react-fade-in';

const About = () => {
  return(
    <FadeIn>
      <div className={ styles.about } >
        <div className={ styles.bioContainer } >
          <div className={ styles.photo } >
            <img src="/images/profile-photo.JPG"/>
          </div>
          <div className={ styles.bio }>
            <p>Hi! I am a Full stack software engineer, urban choreo dancer, hobby enthusiast, and content creator.</p>
            <p>My love for programming has always revolved around its magic to change the course of people’s lives. Whether the scale is large or small, I believe that technology can be used to enhance everyday patterns and to positively shape the direction we take. I am particularly interested in achieving this through designing beautiful interfaces, producing authentic content, and creating seamless user experiences. </p>
            <p>I try to navigate life as abundantly and actively as I can! When I’m not typing away on my computer, you can find me dancing on a competitive hip-hop team, snowboarding at Lake Tahoe & Mammoth, surfing along the SoCal coast, or traveling on my motorcycle.</p>     
          </div>
        </div>
        <div className={ styles.skillsContainer } >
          <div><h4>Skills</h4></div>
          <div className={ styles.languages }>
            <h4>Languages</h4>
            <li>JavaScript ES6</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SQL</li>
            <li>Java</li>
            <li>MATLAB</li>
          </div>
          <div className={ styles.frameworks} >
            <h4>Frameworks</h4>
            <li>ReactJS</li>
            <li>AngularJS</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Mocha</li>
            <li>Jest</li>
          </div>
          <div className={ styles.tools} >
            <h4>Tools</h4>
            <li>AWS</li>
            <li>Webpack</li>
            <li>Docker</li>
            <li>Heroku</li>
            <li>Redis</li>
            <li>JQuery</li>
            <li>Babel</li>
          </div>
          <div className={ styles.others} >
            <h4>Others</h4>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Postman</li>
            <li>MLab</li>
            <li>Chrome Dev Tools</li>
            <li>Git</li>
          </div>
        </div> 
        <div className={ styles.resumeContainer }>
          <h3><a href="/resume/mattminwoolee-resume.pdf" download>Download my resume</a></h3>
        </div>
      </div>
    </FadeIn>
  )
}
  

export default About;