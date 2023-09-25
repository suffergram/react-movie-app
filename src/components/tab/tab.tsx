import { ChangeEvent } from 'react';
import { StyledTab, StyledInput } from './style';

interface TabProps {
  children: string;
  checked?: boolean;
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Tab({ children, checked = false, name, onChange }: TabProps) {
  return (
    <StyledTab>
      <StyledInput
        name={name}
        type="radio"
        value={children}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </StyledTab>
  );
}
