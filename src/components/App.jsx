import React, { useState } from 'react';
import Section from './Section/Section.jsx';
import Notification from './Notification/Notification.jsx';
import Statistics from './Statistics/Statistics.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onBtnClick = event => {
    const feedbackType = event.target.innerText.toLowerCase();
    switch (feedbackType) {
      case 'good': {
        setGood(good + 1);
        break;
      }
      case 'neutral': {
        setNeutral(neutral + 1);
        break;
      }
      case 'bad': {
        setBad(bad + 1);
        break;
      }
      default: {
        break;
      }
    }
  };

  const countTotalFeedback = () => {
    let totalFedbacks = good + neutral + bad;
    return totalFedbacks;
  };

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedbacks = 0;

    if (countTotalFeedback()) {
      positiveFeedbacks = (good / countTotalFeedback()) * 100;
    }

    return positiveFeedbacks.toFixed() + '%';
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onBtnClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
};
