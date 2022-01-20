import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const MainTitle = styled.h2`
  color: #87cefa;
  margin-bottom: 20px;
`;

const Section = ({ title, children }) => {
  return (
    <>
      <MainTitle>{title}</MainTitle>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
