import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 1rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.main};
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Gina Carbon Footprint Calculator</p>
    </FooterContainer>
  );
};

export default Footer;
