import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <h4>
        <Link to="/about">About Page</Link>
      </h4>
    </>
  );
}
