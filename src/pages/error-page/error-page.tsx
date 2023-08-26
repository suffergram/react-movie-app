import { useAsyncError, useNavigate } from 'react-router-dom';
import Button from '../../components/button/button';
import './style.css';

export default function ErrorPage() {
  const error = useAsyncError() as Error;
  const cause = error && (error.cause as Response);
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <div className="centered-message">
      <div className="error-data">
        <h1 className="error-status">{cause ? cause.status : '404'}</h1>
        <h2>{cause ? cause.statusText : 'Not Found'}</h2>
        {error ? <h3>{error.message}</h3> : undefined}
      </div>
      <Button onClick={handleClick} className="cancel">
        return
      </Button>
    </div>
  );
}
