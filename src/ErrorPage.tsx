import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <>
      <h1>NotFoundPage</h1>
      <Link to="/">Go to home</Link>
    </>
  );
}

export default ErrorPage;
