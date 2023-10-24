import { ReactNode } from 'react';
import { Footer } from '../footer/footer';
import { OutletContainer } from './style';

type LayoutProps = {
  children?: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <OutletContainer>{children}</OutletContainer>
      <Footer />
    </>
  );
}
