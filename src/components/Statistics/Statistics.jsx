import { Component } from 'react';

class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <>
        <div>
          <h3>Please leave feedback</h3>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <div>
          <h3>
            <p>Good</p>
            <p>Neutral</p>
            <p>Bad</p>
          </h3>
        </div>
      </>
    );
  }
}

export default Statistic;
