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
import { ReactNode, useState } from 'react';
import Button from '../button/button';
import './style.css';

type PopoverProps = {
  children: ReactNode;
};

export default function Popover({ children }: PopoverProps) {
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
            <button
              type="button"
              className="close"
              onClick={() => setIsOpen(false)}
            >
              ╳
            </button>

            {children}
          </div>
        </FloatingFocusManager>
      ) : null}
    </>
  );
}
