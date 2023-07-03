// import React from 'react';

const FeedbackStatistics = () => {
  const onBtnClick = event => {
    const feedbackType = event.target.innerText.toLowerCase();

    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const countTotalFeedback = () => {
    let totalFedbacks = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0
    );
    return totalFedbacks;
  };
  const countPositiveFeedbackPercentage = () => {
    let positiveFeedbacks = 0;

    if (countTotalFeedback()) {
      positiveFeedbacks = (this.state.good / countTotalFeedback()) * 100;
    }

    return positiveFeedbacks.toFixed() + '%';
  };

  return (
    <>
      <section>
        <b>Please leve feedback</b>
        <button onClick={event => onBtnClick(event)}>Good</button>
        <button onClick={event => onBtnClick(event)}>Neutral</button>
        <button onClick={event => onBtnClick(event)}>Bad</button>
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
          Total: <span>{countTotalFeedback()}</span>
        </p>
        <p>
          Positive feedback:
          <span>{countPositiveFeedbackPercentage()}</span>
        </p>
      </section>
    </>
  );
};

export default FeedbackStatistics;
