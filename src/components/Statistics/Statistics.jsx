import { Component } from 'react';

class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  handleAddFeedback = option => {
    const feedback = option.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  render() {
    return (
      <>
        <div>
          <h3>Please leave feedback</h3>
          <button
            onClick={e => {
              this.handleAddFeedback(e);
            }}
            type="button"
          >
            Good
          </button>
          <button
            onClick={e => {
              this.handleAddFeedback(e);
            }}
            type="button"
          >
            Neutral
          </button>
          <button
            onClick={e => {
              this.handleAddFeedback(e);
            }}
            type="button"
          >
            Bad
          </button>
        </div>
        <div>
          <h3>Statistics</h3>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </>
    );
  }
}

export default Statistic;
