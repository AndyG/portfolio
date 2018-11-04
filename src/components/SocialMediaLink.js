import React, {Component} from 'react';
import '../static/css/SocialMediaLink.css';

type Props = {
  text: string,
  href: string,
  icon: Component,
};
class SocialMediaLink extends Component<Props> {
  render() {
    const Icon = this.props.icon;
    return (
      <div className="SocialMediaLinkContainer">
        <a href={this.props.href}>
          <Icon className="SocialMediaLinkIcon" fill="purple" />
        </a>
        <a href={this.props.href} className="SocialMediaLink">
          {this.props.text}
        </a>
      </div>
    );
  }
}

export default SocialMediaLink;
