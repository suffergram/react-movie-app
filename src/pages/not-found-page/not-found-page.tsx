import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button';
import './style.css';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <div className="not-found-container">
      <h1>404 Not Found</h1>
      <Button onClick={handleClick}>return back</Button>
    </div>
  );
}
