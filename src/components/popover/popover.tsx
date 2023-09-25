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
import { ReactNode, useState } from 'react';
import { StyledMenuButton, Menu, MenuCloseButton } from './style';

type PopoverProps = {
  children: ReactNode;
};

export function Popover({ children }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, strategy, context } = useFloating<HTMLButtonElement>({
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

  const handleClick = () => setIsOpen(false);

  return (
    <>
      <StyledMenuButton {...getReferenceProps()} ref={refs.setReference}>
        ⋮
      </StyledMenuButton>
      {isOpen ? (
        <FloatingFocusManager context={context} modal={false}>
          <Menu
            {...getFloatingProps()}
            className="menuPopover"
            ref={refs.floating as React.RefObject<HTMLDivElement>}
            style={{
              position: strategy,
              top: 16,
              right: 16,
            }}
          >
            <MenuCloseButton onClick={handleClick}>╳</MenuCloseButton>
            {children}
          </Menu>
        </FloatingFocusManager>
      ) : null}
    </>
  );
}
