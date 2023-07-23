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
import { useState } from 'react';
import Button from '../button/button';
import ModalTitles from '../../types/modal-title';
import { Movie } from '../../types/movie';
import './style.css';

type PopoverProps = {
  onMovieModalOpen: (name: string, movie: Movie) => void;
  onDeleteModalOpen: (currentMovie: Movie) => void;
  movie: Movie;
};

export default function Popover({
  onMovieModalOpen,
  onDeleteModalOpen,
  movie,
}: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { x, y, refs, strategy, context } = useFloating<HTMLButtonElement>({
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

  return (
    <>
      <Button {...getReferenceProps()} ref={refs.reference} className="menu">
        ⋮
      </Button>

      {isOpen ? (
        <FloatingFocusManager context={context} modal={false}>
          <div
            {...getFloatingProps()}
            className="menuPopover"
            ref={refs.floating as React.RefObject<HTMLDivElement>}
            style={{
              position: strategy,
              top: y ?? 16,
              right: x ?? 16,
            }}
          >
            <Button className="close" onClick={() => setIsOpen(false)} />

            <Button
              className="edit"
              onClick={() => onMovieModalOpen(ModalTitles.Edit, movie)}
            >
              edit
            </Button>

            <Button className="delete" onClick={() => onDeleteModalOpen(movie)}>
              delete
            </Button>
          </div>
        </FloatingFocusManager>
      ) : null}
    </>
  );
}
