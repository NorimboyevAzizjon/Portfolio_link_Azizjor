import React from "react";
import Profile from "./components/Profile";
import "./index.css";
import userData from "./data/userData";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Profile userData={userData} />
      </div>
    </div>
  );
}

export default App;