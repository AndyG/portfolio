import React, {Component} from 'react';
import '../static/css/SocialMediaLink.css';
import GithubIcon from './GithubIcon';

class SocialMediaLink extends Component {
  render() {
    return (
      <div>
        <GithubIcon fillColor={'green'} />
        <button className="SocialMediaLink" onClick={this.props.onClick}>
          Test Button
        </button>
      </div>
    );
  }
}

export default SocialMediaLink;
