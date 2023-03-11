import PropTypes from 'prop-types';
import './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      {' '}
      <button
        onClick={e => {
          onLeaveFeedback(e);
        }}
        type="button"
      >
        Good
      </button>
      <button
        onClick={e => {
          onLeaveFeedback(e);
        }}
        type="button"
      >
        Neutral
      </button>
      <button
        onClick={e => {
          onLeaveFeedback(e);
        }}
        type="button"
      >
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
