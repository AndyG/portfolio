import React, {Component} from 'react';
import SocialMediaLink from './SocialMediaLink';
import GithubIcon from '../icons/GithubIcon';

class App extends Component {
  txt = 'a';
  render() {
    return (
      <div>
        <SocialMediaLink text="Github" href="https://github.com/angarron" icon={GithubIcon} />
      </div>
    );
  }
}

export default App;
