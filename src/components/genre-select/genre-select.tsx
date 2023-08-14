import {
  FloatingFocusManager,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import { useState, ChangeEvent } from 'react';
import Option from '../option/option';
import { genres } from '../main/info';
import './style.css';

type SelectorProps = {
  value: string[];
  onChange: (newValues: string[]) => void;
};

const emptyValue: string[] = [];

export default function GenreSelect({
  value = emptyValue,
  onChange,
}: SelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { y, strategy, context } = useFloating<HTMLButtonElement>({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const handleOptionChange =
    (genre: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const newValues = event.target.checked
        ? [...value, genre]
        : value.filter((val) => val !== genre);
      onChange(newValues);
    };

  return (
    <div className="genre-select-container">
      <input
        {...getReferenceProps()}
        className="genre-select"
        value={value.join(', ')}
        placeholder="Select Genre"
      />
      {isOpen ? (
        <FloatingFocusManager context={context} modal={false}>
          <div
            {...getFloatingProps()}
            className="genre-select-list"
            style={{
              position: strategy,
              top: y ?? 57,
            }}
          >
            <div className="genre-select-list">
              {genres.map((item) => (
                <Option
                  key={item.id}
                  checked={value.includes(item.name)}
                  onChange={handleOptionChange(item.name)}
                >
                  {item.name}
                </Option>
              ))}
            </div>
          </div>
        </FloatingFocusManager>
      ) : null}
    </div>
  );
}
