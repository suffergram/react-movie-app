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

export default function Popover({ newModal, newDeleteModal }) {
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
        ref={refs.reference}
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
              ref={refs.floating}
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
                onClick={() => newModal('edit')}
              >
                edit
              </Button>

              <Button
                className="delete"
                onClick={newDeleteModal}
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