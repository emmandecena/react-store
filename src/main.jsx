import { useState } from "react";
import { createRoot } from "react-dom/client";
import StoreFront from "./StoreFront.jsx";
import "./index.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  function handleButtonClick() {
    if (loggedIn === false) {
      setLoggedIn(true);
    }
    setLoggedIn(false);
  }
  if (loggedIn === true) {
    return (
      <>
        <StoreFront />
        <button className="btn btn-outline" onClick={handleButtonClick}>
          Logout
        </button>
      </>
    );
  }
  return (
    <>
      <h2>Please login</h2>
      <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>
        Login
      </button>
    </>
  );
}

createRoot(document.querySelector("#react-root")).render(<App />);
