'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../../components/button/button';
import { Container, ErrorData, Status } from './style';

type ErrorPageProps = {
  error?: Error & {
    cause?: Response;
  };
};

export function ErrorPage({ error }: ErrorPageProps) {
  const cause = error && (error.cause as Response);
  const { back } = useRouter();

  const handleClick = () => back();

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
