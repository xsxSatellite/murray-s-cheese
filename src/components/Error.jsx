import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  let message = null;

  switch (error.status) {
    case 404:
      message = "Page not found.";
      break;
    default:
      message = "Something went wrong, please try again.";
  }

  return (
    <main className="error">
      <h1>{message}</h1>
      <p>{error.status}</p>
    </main>
  );
}
