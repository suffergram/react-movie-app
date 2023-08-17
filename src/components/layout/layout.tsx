import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';

export default function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
