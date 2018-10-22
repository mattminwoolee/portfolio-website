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
          <div><h4 style={{ fontWeight: "800"}}>Skills</h4></div>
          <div className={ styles.languages }>
            <h4>Languages</h4>
            <li><i className="devicon-javascript-plain"></i> JavaScript ES6</li>
            <li><i className="devicon-html5-plain"></i> HTML5</li>
            <li><i className="devicon-css3-plain"></i> CSS3</li>
            <li><i class="devicon-sass-original"></i> SASS</li>
            <li><i className="devicon-mysql-plain"></i> SQL</li>
            <li><i className="devicon-java-plain"></i> Java</li>
            <li><img src="/images/matlab.png" style={{height: "2.5vmin", width: "2.5vmin", objectFit: "contain"}}/> MATLAB</li>
          </div>
          <div className={ styles.frameworks} >
            <h4>Frameworks</h4>
            <li><i className="devicon-react-original"></i> ReactJS</li>
            <li><i className="devicon-angularjs-plain"></i> AngularJS</li>
            <li><img src="/images/redux.png" style={{height: "2.5vmin", width: "2.5vmin", objectFit: "contain"}}/> Redux</li>
            <li><i className="devicon-nodejs-plain"></i> Node.js</li>
            <li><i className="devicon-express-original"></i> Express</li>
            <li><i className="devicon-mocha-plain"></i> Mocha</li>
            {/* <li>Jest</li> */}
          </div>
          <div className={ styles.tools} >
            <h4>Tools</h4>
            <li><i className="devicon-amazonwebservices-original"></i> AWS</li>
            <li><i className="devicon-webpack-plain"></i> Webpack</li>
            <li><i className="devicon-docker-plain"></i> Docker</li>
            <li><i className="devicon-heroku-original"></i> Heroku</li>
            <li><i className="devicon-redis-plain"></i> Redis</li>
            <li><i className="devicon-jquery-plain"></i> JQuery</li>
            <li><i className="devicon-babel-plain"></i> Babel</li>
          </div>
          <div className={ styles.others} >
            <h4>Others</h4>
            <li><i className="devicon-mongodb-plain"></i> MongoDB</li>
            <li><i className="devicon-postgresql-plain"></i> PostgreSQL</li>
            <li><i className="devicon-mysql-plain"></i> MySQL</li>
            <li><i className="devicon-bootstrap-plain"></i> Bootstrap</li>
            <li><i className="devicon-chrome-plain"></i> Chrome Dev Tools</li>
            <li><i className="devicon-git-plain"></i> Git</li>
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