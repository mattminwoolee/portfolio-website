import React from 'react';
import styles from './../styles/App.css';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className={ styles.outerContainer } >
        <Header/>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;