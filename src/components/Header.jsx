import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.main};
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Carbon Footprint Calculator</h1>
    </HeaderContainer>
  );
};

export default Header;
