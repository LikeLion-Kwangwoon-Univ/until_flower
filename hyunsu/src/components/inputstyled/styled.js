import styled from 'styled-components';
export const InputPw = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const InputLabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const InputLabel = styled.p`
  font-weight: bold;
`;

export const PwBox = styled.div`
  border: 2px solid
    ${({ $isError }) => ($isError ? 'red' : 'rgb(114, 114, 205)')};

  padding: 5px 10px;
  display: flex;
  align-items: center;

  & > svg {
    border-right: 1px solid grey;
    padding-right: 5px;
  }
`;

export const PwBoxContent = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
`;

export const PwBoxError = styled.p`
  color: red;
  height: 20px;
  font-size: 11px;
  font-weight: 500;
`;

export const LoginBox = styled.button`
  background-color: blueviolet;
  color: white;
  border-radius: 4%;
  padding: 10px 10px;
`;
