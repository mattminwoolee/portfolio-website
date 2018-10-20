import React from 'react';
import styles from './../styles/Contact.css';
import FadeIn from 'react-fade-in';

const Contact = () => {
  return(
    <FadeIn>
      <div className={ styles.contact }>
        <div className={ styles.contactContainer }>
          <div className={ styles.usernameHandle } >
            <li><a href="mailto:mattminwoolee@gmail.com">Email</a></li>
            <li><a href="https://www.linkedin.com/in/mattminwoolee/">Linkedin</a></li>
            <li><a href="https://github.com/mattminwoolee">Github</a></li>
            <li><a href="https://www.instagram.com/mattminwoolee/">Instagram</a></li>
          </div>
          <div className={ styles.line }>
          </div>
          <div className={ styles.contactForm } >
            Leave me a note and let's chat!
            <div>
              <form className={ styles.form} >
                <label>
                  <input type="text" placeholder="Name" name="name" style={{width: "39vmin", height: "4vmin"}}/>
                </label>
                <label>
                  <input type="text" placeholder="E-mail" name="email" style={{width: "44vmin", height: "4vmin"}}/>
                </label>
                <label>
                  <textarea placeholder="Type message here.." name="message" style={{width: "88vmin", height: "10vmin"}}/>
                </label>
                <input type="submit" value="Send Message"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
  

export default Contact;