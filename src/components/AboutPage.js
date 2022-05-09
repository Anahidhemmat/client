import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function AboutPage() {
  const [parallelValue, setParallelValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [text, setText] = useState("");

  function handleSibmit(e) {
    e.preventDefault();
    setText(descValue);
  }
  return (
    <>
      <h1>About Page</h1>

      <Link to="/">Home</Link>
      <h2>
        <Link to="new-user">New User Welcome</Link>
      </h2>
      <Outlet />
      <form onSubmit={handleSibmit}>
        <label>type and submit on change</label>
        <input
          type="text"
          name="parallel"
          id="parallel"
          value={parallelValue}
          onChange={(e) => setParallelValue(e.target.value)}
        />
        <label>type and submit on click the button</label>
        <input
          type="text"
          name="describe"
          id="describe"
          value={descValue}
          onChange={(e) => setDescValue(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      {parallelValue && <p>{parallelValue}</p>}
      {text && <p>{text}</p>}
    </>
  );
}
