import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserForm from './components/UserForm';
import ResultDisplay from './components/ResultsDisplay';
import Tips from './components/Tips';
import styled from 'styled-components';

const MainContainer = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

const App = () => {
  const [result, setResult] = useState(null);

  const calculateFootprint = (data) => {
    const footprint = (
      parseFloat(data.transport) * 0.411 +
      parseFloat(data.energy) * 0.233 +
      (data.diet === 'meat-based' ? 3.3 : data.diet === 'vegetarian' ? 1.7 : 1.5) * 365 +
      parseFloat(data.waste) * 0.9
    ).toFixed(2);
    setResult(footprint);
  };

  return (
    <MainContainer>
      <Header />
      <MainContent>
        <UserForm onSubmit={calculateFootprint} />
        {result && <ResultDisplay result={result} />}
        <Tips />
      </MainContent>
      <Footer />
    </MainContainer>
  );
};

export default App;
