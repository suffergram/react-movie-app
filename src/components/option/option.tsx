import { ChangeEvent } from 'react';
import { Container, StyledInput, StyledCheckbox, StyledCheck } from './style';

type OptionProps = {
  children: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function Option({ children, checked, onChange }: OptionProps) {
  return (
    <Container>
      <StyledInput
        id={children}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <StyledCheckbox>
        <StyledCheck />
      </StyledCheckbox>
      {children}
    </Container>
  );
}
