import { Component } from 'react';

class FeedbackStatistics extends Component {
  onBtnClick(event) {
    const feedbackType = event.target.innerText.toLowerCase();

    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  }

  countTotalFeedback() {
    let totalFedbacks = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0
    );
    return totalFedbacks;
  }
  countPositiveFeedbackPercentage() {
    let positiveFeedbacks = 0;

    if (this.countTotalFeedback()) {
      positiveFeedbacks = (this.state.good / this.countTotalFeedback()) * 100;
    }

    return positiveFeedbacks.toFixed() + '%';
  }

  render() {
    return (
      <>
        <section>
          <b>Please leve feedback</b>
          <button onClick={event => this.onBtnClick(event)}>Good</button>
          <button onClick={event => this.onBtnClick(event)}>Neutral</button>
          <button onClick={event => this.onBtnClick(event)}>Bad</button>
        </section>
        <section>
          <h2>Statistics</h2>
          <p>
            Good: <span>{this.state.good}</span>
          </p>
          <p>
            Neutral: <span>{this.state.neutral}</span>
          </p>
          <p>
            Bad: <span>{this.state.bad}</span>
          </p>
          <p>
            Total: <span>{this.countTotalFeedback()}</span>
          </p>
          <p>
            Positive feedback:{' '}
            <span>{this.countPositiveFeedbackPercentage()}</span>
          </p>
        </section>
      </>
    );
  }
}

export default FeedbackStatistics;
