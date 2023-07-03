import React, { Component } from 'react';
import Section from './Section/Section.jsx';
import Notification from './Notification/Notification.jsx';
import Statistics from './Statistics/Statistics.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = event => {
    const feedbackType = event.target.innerText.toLowerCase();

    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () => {
    let totalFedbacks = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0
    );
    return totalFedbacks;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedbacks = 0;

    if (this.countTotalFeedback()) {
      positiveFeedbacks = (this.state.good / this.countTotalFeedback()) * 100;
    }

    return positiveFeedbacks.toFixed() + '%';
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onBtnClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}
