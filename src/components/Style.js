import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 450px;
  padding: 1rem;
  border-radius: 5px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid #000;
`;

export const TextInput = styled.input`
  padding: 0.8em 1em;
  border: none;
  border-bottom: 2px solid #777;
  display: block;
`;

export const SubmitBtn = styled.input`
  border: none;
  padding: 0.8rem 1.2rem;
  background-color: gray;
  border-radius: 5px;
  font-size: 1.2rem;
  text-align: center;
  display: inline-block;
  margin-top: 1rem;
  color: #fff;
  width: 100%;
`;

export const TodosPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #777;
`;
export const TodosDiv = styled.div`
  width: 450px;
  margin: 2rem auto;
  border: 2px solid #666;
  padding: 1rem;
`;
