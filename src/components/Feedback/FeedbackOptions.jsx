import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
      <div>
        {options.map(option => (
        <button key={option} className={styles.feedbackOptions} 
                onClick={() => onLeaveFeedback(option)}>{option}</button>
   ))
        }
   </div>)
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions