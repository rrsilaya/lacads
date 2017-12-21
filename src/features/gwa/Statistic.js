import React, { Component } from 'react';

class Statistic extends Component {
  render() {
    return (
      <div className="gwa-stat">
        <span className="data">{this.props.grade ? this.props.data.toFixed(2) : this.props.data}</span>
        <span className="label">{this.props.label}</span>
      </div>
    );
  }
}

export default Statistic;