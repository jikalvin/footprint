import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: ${({ theme }) => theme.fonts.main};
  max-width: 500px;
  margin: 2rem auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const UserForm = ({ onSubmit }) => {
  const [transport, setTransport] = useState('');
  const [energy, setEnergy] = useState('');
  const [diet, setDiet] = useState('');
  const [waste, setWaste] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ transport, energy, diet, waste });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Transport (miles per week):</Label>
        <Input
          type="number"
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Energy (kWh per month):</Label>
        <Input
          type="number"
          value={energy}
          onChange={(e) => setEnergy(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Diet (meat-based/vegetarian/vegan):</Label>
        <Input
          type="text"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Waste (bags per month):</Label>
        <Input
          type="number"
          value={waste}
          onChange={(e) => setWaste(e.target.value)}
        />
      </FormGroup>
      <Button type="submit">Calculate</Button>
    </FormContainer>
  );
};

export default UserForm;
