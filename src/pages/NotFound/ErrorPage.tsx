import { useRouteError } from "react-router-dom";

interface ErrorProps {
  statusText: string;
  message: string;
}

export function ErrorPage() {
  const error = useRouteError() as ErrorProps;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
