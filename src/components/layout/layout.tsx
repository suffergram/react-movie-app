import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/footer';
import { OutletContainer } from './style';

export function Layout() {
  return (
    <>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <Footer />
    </>
  );
}
