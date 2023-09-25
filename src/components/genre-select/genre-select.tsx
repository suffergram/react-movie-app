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
import { Option } from '../option/option';
import { genres } from '../main/info';
import { Container, StyledInput, SelectOptionContainer } from './style';

type SelectorProps = {
  value: string[];
  onChange: (newValues: string[]) => void;
  error?: boolean;
};

const emptyValue: string[] = [];

export function GenreSelect({
  value = emptyValue,
  onChange,
  error,
}: SelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, y, context } = useFloating<HTMLInputElement>({
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
    <Container>
      <StyledInput
        $error={error}
        readOnly
        ref={refs.setReference}
        {...getReferenceProps()}
        value={value.join(', ')}
        placeholder="Select Genre"
      />
      {isOpen ? (
        <FloatingFocusManager context={context} modal={false}>
          <SelectOptionContainer
            ref={refs.setFloating}
            {...getFloatingProps()}
            $offset={y}
          >
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
          </SelectOptionContainer>
        </FloatingFocusManager>
      ) : null}
    </Container>
  );
}
