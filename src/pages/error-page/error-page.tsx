import { useAsyncError, useNavigate } from 'react-router-dom';
import { Button } from '../../components/button/button';
import { Container, ErrorData, Status } from './style';

export function ErrorPage() {
  const error = useAsyncError() as Error;
  const cause = error && (error.cause as Response);
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <Container>
      <ErrorData>
        <Status>{cause ? cause.status : '404'}</Status>
        <h2>{cause ? cause.statusText : 'Not Found'}</h2>
        {error ? <h3>{error.message}</h3> : undefined}
      </ErrorData>
      <Button variant="secondary" onClick={handleClick}>
        return
      </Button>
    </Container>
  );
}
