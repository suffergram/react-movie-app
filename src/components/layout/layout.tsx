import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import './style.css';

export default function Layout() {
  return (
    <>
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
