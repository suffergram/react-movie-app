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
import { ChangeHandler } from 'react-hook-form';
import Option from '../option/option';
import { genres } from '../main/info';
import Button from '../button/button';
import './style.css';

type SelectorProps = {
  options: string[];
  values: string[];
  onChange: (newValues: string[]) => void;
};

export default function Selector({ options, values, onChange }: SelectorProps) {
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

  // const [genreState, setGenreState] = useState([...options]);

  // const addGenre = (genre: string) => {
  //   setGenreState([...genreState, genre]);
  // };
  // const removeGenre = (genre: string) => {
  //   setGenreState(genreState.filter((item) => item !== genre));
  // };

  const handleOptionChange = (genre: string) => (event: ChangeEvent) => {
    // genreState.includes(genre) ? removeGenre(genre) : addGenre(genre);
    //
    // const newValues = event.target.checked
    //   ? [...values, genre]
    //   : values.filter((value) => value !== genre);
    // onChange(newValues);
  };

  return (
    <div className="selector-container">
      {/* <Button {...getReferenceProps()} className="selector">
          {genreState.join(', ')}
        </Button> */}
      <input
        {...getReferenceProps()}
        className="selector"
        // value={genreState.join(', ')}
        placeholder="Select Genre"
        onClick={() => setIsOpen((value) => !value)} // doesn't work correctly
        // {...register}
      />
      {isOpen ? (
        <FloatingFocusManager context={context} modal={false}>
          <div
            {...getFloatingProps()}
            className="selector-list"
            style={{
              position: strategy,
              top: y ?? 57,
            }}
          >
            <div className="selector-list">
              {genres.map((item) => (
                <Option
                  key={item.id}
                  checked={values.includes(item.name)}
                  onChange={handleOptionChange(item.name)}
                >
                  {item.name}
                </Option>
              ))}
            </div>{' '}
          </div>
        </FloatingFocusManager>
      ) : null}
    </div>
  );
}
