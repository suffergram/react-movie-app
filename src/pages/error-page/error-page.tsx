import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError() as Response;

  return (
    <div className="centered-message">
      <h1>{error.status}</h1>
      <p>{error.statusText}</p>
    </div>
  );
}
