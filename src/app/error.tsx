'use client';

import { ErrorContent } from '../components/error-content/error-content';

type ErrorProps = {
  error?: Error & {
    cause?: Response;
  };
};

export default function Error({ error }: ErrorProps) {
  return <ErrorContent error={error} />;
}
