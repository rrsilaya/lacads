import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './style.css';
import Statistic from './Statistic';

class Gwa extends Component {
  constructor() {
    super();
    this.state = {
      labels: [
        '1st Yr, 1st Sem',
        '1st Yr, 2nd Sem',
        '2nd Yr, 1st Sem',
        '2nd Yr, 2nd Sem',
        '3rd Yr, 1st Sem',
        '3rd Yr, 2nd Sem',
        '4th Yr, 1st Sem',
        '4th Yr, 2nd Sem'
      ],
      data: [1.33, 2.0, 2.25, 2.23, 1.5]
    }
  }

  /* Helper Functions */
  normalize = value => (value * -1) + 6;
  denormalize = value => (value - 6) * -1;

  render() {
    const data = {
      labels: this.state.labels,
      datasets: [{
        data: this.state.data.map(this.normalize)
      }]
    }

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            maxTicksLimit: 6,
            callback: label => this.denormalize(label).toFixed(2)
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: ({ yLabel }) => this.denormalize(yLabel).toFixed(2)
        }
      }
    }

    const config = {
      height: 100,
      data,
      options,
      legend: null,
      className: 'chart'
    }

    return (
      <div>
        <h1 className="subbed hero">General Weighted Average</h1>
        <span className="sub dehighlight">General Weighted Average</span>

        <div className="gwa-grid">
          <div className="gwa-graph"><Line {...config} /></div>
          <div className="gwa-stats">
            <Statistic data={2.33} label="Current GWA" grade />
            <Statistic data={1.50} label="Highest GPA" grade />
            <Statistic data={2.55} label="Lowest GPA" grade />
          </div>
        </div>
      </div>
    );
  }
}

export default Gwa;