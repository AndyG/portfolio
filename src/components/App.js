import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../static/css/App.css';
import SocialMediaLink from './SocialMediaLink';

class App extends Component {
  constructor() {
    super();
    this.state = {
      punctuation: '!',
    };
  }

  handleClick = () => {
    this.setState({punctuation: '!!'});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload
            {this.state.punctuation}
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <SocialMediaLink onClick={this.handleClick} />
        </header>
      </div>
    );
  }
}

export default App;
