import { MouseEvent } from 'react';
import { StyledTab, StyledInput } from './style';

interface TabProps {
  checked?: boolean;
  name: string;
  value: string;
  onClick: (event: MouseEvent<HTMLInputElement>) => void;
}

export function Tab({ checked = false, name, value, onClick }: TabProps) {
  return (
    <StyledTab>
      <label>
        <StyledInput
          name={name}
          type="radio"
          value={value}
          aria-checked={checked}
          checked={checked}
          onClick={onClick}
          readOnly
        />
        {value}
      </label>
    </StyledTab>
  );
}
