import { Component } from "react";
import Statistics from "./Feedback/Statistics";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Section from "./Feedback/SectionTitle";
import Notification from "./Feedback/Notification";

export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }
 
onLeaveFeedback = (option) => {
return this.setState({[option]: this.state[option] + 1})
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    let total = good + neutral + bad;
    return total
  }

  countPositiveFeedbackPercentage = (total, good) => {
       return Math.round(good * 100 / total);   
}
    
render() {
  const {good, neutral, bad} = this.state;
  const options = Object.keys(this.state);
  const total = this.countTotalFeedback();
  return <>
    <Section title="Please leave Feedback">
    <FeedbackOptions
    options={options}
    onLeaveFeedback={this.onLeaveFeedback}
    />
    </Section>

  <Section title="Statistics"> 
 {total ? 
    (<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={this.countPositiveFeedbackPercentage(total, good)}
        />) 
        : 
        (<Notification message="There is no feedback"/>
      )}
     </Section>
    </>
 }
}


