import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: ${({ theme }) => theme.fonts.main};
  max-width: 500px;
  margin: 2rem auto;
  text-align: center;
`;

const ResultDisplay = ({ result }) => {
  return (
    <ResultContainer>
      <h2>Your Carbon Footprint:</h2>
      <p>{result} kg CO2 per year</p>
    </ResultContainer>
  );
};

export default ResultDisplay;
