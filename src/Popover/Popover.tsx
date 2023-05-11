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
import Button from '../Button/Button';

import './style.css';

export default function Popover(
  { onMovieModalOpen, onDeleteModalOpen }:
  { onMovieModalOpen: (name: string) => void, onDeleteModalOpen: () => void },
) {
  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  const {
    x, y, refs, strategy, context,
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      flip(),
      shift(),
    ],
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
      <Button
        {...getReferenceProps()}
        ref={refs.reference as React.RefObject<HTMLButtonElement>}
        className="menu"
      >
        ⋮
      </Button>

      {isOpen
        ? (
          <FloatingFocusManager
            context={context}
            modal={false}
          >
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
              <Button
                className="close"
                onClick={() => setIsOpen(false)}
              />

              <Button
                className="edit"
                onClick={() => onMovieModalOpen('edit')}
              >
                edit
              </Button>

              <Button
                className="delete"
                onClick={onDeleteModalOpen}
              >
                delete
              </Button>
            </div>
          </FloatingFocusManager>
        )
        : null}
    </>
  );
}
