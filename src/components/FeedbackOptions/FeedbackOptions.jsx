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

export default FeedbackOptions;
