import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.elementType.isRequired,
  };
  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <div>
        {this.props.options.map((option, index) => {
          return (
            <button
              key={index}
              className={`${css.btn} ${css[option]}`}
              onClick={event => onLeaveFeedback(event)}
              style={{ textTransform: 'capitalize' }}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}

export default FeedbackOptions;
