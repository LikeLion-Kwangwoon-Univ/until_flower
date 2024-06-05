import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PasswordSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

export const PasswordBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  padding: 12px;
  border: 2px solid ${(props) => props.$borderColor};
  border-radius: 4px;

  & > svg {
    margin: 0 3px;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 5px 10px;
  border: none;
  border-left: 2px solid #6a5ef4;
  outline: none;
  font-size: 13px;
`;

export const Helper = styled.p`
  height: 16px;
  font-size: 14px;
  color: red;
`;

export const LoginBtn = styled.button`
  text-align: center;
  padding: 14px 16px;
  border-radius: 4px;
  color: white;
  background-color: #6a5ef4;
  font-size: 16px;
  font-weight: bold;

  &:disabled {
    background-color: lightgrey;
    color: grey;
  }
`;
