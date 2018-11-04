import React, {Component} from 'react';
import styles from './SocialMediaLink.module.styl';

type Props = {
  text: string,
  href: string,
  icon: Component,
};
class SocialMediaLink extends Component<Props> {
  render() {
    const Icon = this.props.icon;
    return (
      <div className={styles.container}>
        <a href={this.props.href}>
          <Icon className={styles.icon} />
        </a>
        <a className={styles.link} href={this.props.href}>
          {this.props.text}
        </a>
      </div>
    );
  }
}

export default SocialMediaLink;
