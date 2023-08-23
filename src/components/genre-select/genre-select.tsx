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
} from '@floating-ui/react';
import { useState, ChangeEvent } from 'react';
import clsx from 'clsx';
import Option from '../option/option';
import { genres } from '../main/info';
import './style.css';

type SelectorProps = {
  value: string[];
  onChange: (newValues: string[]) => void;
  className?: string;
};

const emptyValue: string[] = [];

export default function GenreSelect({
  value = emptyValue,
  onChange,
  className,
}: SelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, y, strategy, context } = useFloating<HTMLInputElement>({
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
        : value.filter((val) => val.toUpperCase() !== genre.toUpperCase());
      onChange(newValues);
    };

  return (
    <>
      <input
        readOnly
        ref={refs.setReference}
        {...getReferenceProps()}
        className={clsx('genre-select', className)}
        value={value.join(', ')}
        placeholder="Select Genre"
      />
      {isOpen ? (
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={refs.setFloating}
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
                  checked={value.some(
                    (genre) => genre.toUpperCase() === item.name.toUpperCase()
                  )}
                  onChange={handleOptionChange(item.name)}
                >
                  {item.name}
                </Option>
              ))}
            </div>
          </div>
        </FloatingFocusManager>
      ) : null}
    </>
  );
}
