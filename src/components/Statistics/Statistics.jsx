import { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <span>
        <p>
          Good: <span>{good}</span>
        </p>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
        <p>
          Bad: <span>{bad}</span>
        </p>
        <p>
          Total: <span>{total}</span>
        </p>
        <p>
          Positive feedback:
          <span>{positivePercentage}</span>
        </p>
      </span>
    );
  }
}

export default Statistics;
