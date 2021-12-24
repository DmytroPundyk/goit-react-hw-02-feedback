import styled from 'styled-components';
import React from 'react';
import shortid from 'shortid';
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

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Buttons>
      {options.map(option => (
        <Button
          key={shortid.generate()}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </Buttons>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
