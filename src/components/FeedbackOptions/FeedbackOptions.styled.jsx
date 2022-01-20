import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Buttons = styled.div`
  display: flex;
`;
const Button = styled.button`
  border: 1px solid #8b4517;
  padding: 5px 10px;
  border-radius: 20%;
  font-size: 14px;
  color: #8b4513;
  margin-right: 15px;
  &:hover,
  &:focus-visible {
    color: #fff;
    background-color: #8b4513;
    cursor: pointer;
  }
`;

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Buttons>
      <Button type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </Button>
      <Button type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </Button>
      <Button type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </Button>
    </Buttons>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
