import React from 'react';
import styles from './../styles/Contact.css';
import FadeIn from 'react-fade-in';

const Contact = () => {
  return(
    <FadeIn>
      <div className={ styles.contact }>
        <div className={ styles.contactContainer }>
          <div className={ styles.usernameHandle } >
            <li>Email</li>
            <li>Linkedin</li>
            <li>Github</li>
            <li>Instagram</li>
          </div>
          <div className={ styles.line }>
          </div>
          <div className={ styles.contactForm } >
            Leave me a note and let's chat!
            <form>
              <label>
                <input type="text" placeholder="Name" name="name"/>
              </label>
              <label>
                <input type="text" placeholder="E-mail" name="email" />
              </label>
              <label>
                <input type="text" placeholder="Message" name="message" style={{width: "70vmin"}}/>
              </label>
              <input type="submit" value="Send Message"/>
            </form>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
  

export default Contact;