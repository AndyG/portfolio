import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../static/css/App.css';
import SocialMediaLink from './SocialMediaLink';
import {ReactComponent as GithubIcon} from '../images/github-mark.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <SocialMediaLink text="Github" href="https://github.com/angarron" icon={GithubIcon} />
        </header>
      </div>
    );
  }
}

export default App;
