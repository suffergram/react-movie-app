import { ChangeEvent } from 'react';
import './style.css';

type OptionProps = {
  children: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function Option({ children, checked, onChange }: OptionProps) {
  return (
    <div className="option-container">
      <label className="option-label">
        <input
          id={children}
          className="option-check-input"
          type="checkbox"
          onChange={onChange}
          checked={checked}
        />
        <span className="option-check-box">
          <div className="option-icon" />
        </span>
        {children}
      </label>
    </div>
  );
}
