import s from './App.module.css';
import { useState } from 'react';
import Section from './components/Section/section.jsx';
import Statistics from './components/Statistics/statistics.jsx';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.styled.jsx';
import Notification from './components/Notification/Notification.jsx';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    switch (event.target.name) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
    }
  };

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };

  return (
    <div className={s.app}>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
};

export default App;
