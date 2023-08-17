import { Link } from 'react-router-dom';
import './style.css';

export default function Logo() {
  return (
    <Link style={{ textDecoration: 'none' }} to="/">
      <p className="logo">
        <strong>netflix</strong>
        roulette
      </p>
    </Link>
  );
}
