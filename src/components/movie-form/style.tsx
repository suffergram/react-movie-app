import styled, { css } from 'styled-components';

export const StyledForm = styled.form`
  width: 856px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
`;

export const StyledLabel = styled.label`
  color: var(--color-1);
  font-size: 16px;
  margin: 0 0 13px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const StyledInput = styled.input<{ $error?: boolean }>`
  background-color: var(--color-form-input);
  border: none;
  padding: 16px;
  font-size: 20px;
  color: var(--color-white);

  ${(props) => {
    if (props.$error) {
      return css`
        outline: 1px solid var(--color-1);
      `;
    }
    return css``;
  }}
`;

export const SubmitErrorMessage = styled.p`
  position: absolute;
  width: 100%;
  margin-top: 95px;
  font-size: 14px;
  text-transform: none;
`;

export const TextareaContainer = styled(StyledLabel)`
  grid-column: auto / span 2;
`;

export const StyledTextarea = styled.textarea`
  background-color: var(--color-form-input);
  border: none;
  padding: 16px;
  font-size: 20px;
  color: var(--color-white);
  box-sizing: border-box;
  resize: none;
  width: 100%;
  height: 197px;
`;

export const ButtonContainer = styled.div`
  grid-column: auto / span 2;
  display: flex;
  gap: 13px;
  justify-self: end;
  margin-top: 30px;
`;
