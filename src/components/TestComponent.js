import React, {Component} from 'react';
import '../static/css/TestComponent.css';

class TestComponent extends Component {
  render() {
    return (
      <div>
        <button className="TestComponentButton" onClick={this.props.onClick}>
          Test Button
        </button>
      </div>
    );
  }
}

export default TestComponent;
