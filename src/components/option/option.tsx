import { ChangeEvent } from 'react';
import './style.css';

type OptionProps = {
  children: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Option({ children, checked, onChange }: OptionProps) {
  return (
    <div className="option-container">
      <label className="option-label">
        <input
          id={children}
          className="option-checkbox"
          type="checkbox"
          onChange={onChange}
          checked={checked}
        />
        {children}
      </label>
    </div>
  );
}
