import styled, { css } from "styled-components";

export const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  width: 85vw;
  @media (min-width: 768px) {
    width: 60vw;
  }
  @media (min-width: 992px) {
    width: 35vw;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  padding: 2.5rem;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles};
`;
export const StyledButton = styled.button`
  display: block;
  background-color: #db2777;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 2.5rem;
  padding: 0 1.5rem;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background-color: #be185d;
  }
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem 0;

  legend {
    padding: 0 1rem;
  }

  label {
    padding-right: 1rem;
  }

  input {
    margin-right: 0.5rem;
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 600;
`;
