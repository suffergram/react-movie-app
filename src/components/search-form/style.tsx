import styled from 'styled-components';
import { Button } from '../button/button';

export const StyledInput = styled.input`
  width: 713px;
  border: none;
  border-radius: 4px;
  background-color: rgba(35, 35, 35, 0.5);
  color: var(--color-5);
  padding-left: 15px;
  box-sizing: border-box;
  font-size: 20px;
`;

export const StyledButton = styled(Button)`
  width: 233px;
  font-size: 20px;
`;

export const StyledForm = styled.form`
  height: 57px;
  display: flex;
  gap: 14px;
`;
