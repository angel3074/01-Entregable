import React, { useState } from "react";
import users from "../users.json";
import colors from '../colors.json'

const QuoteBox = () => {

  const [currentUser, setCurrentUser] = useState(
    users[Math.floor(Math.random() * users.length)]
  );
  // let currentUser = users[44]


  const colorRandom = Math.floor(Math.random() * colors.length);
  const assignRandom = colors[colorRandom].hex;

  const changeUser = () => {
    setCurrentUser(users[Math.floor(Math.random() * users.length)]);
    document.body.style = `background: ${assignRandom}`;
  };





  return (
    <div
      className="cards"
      style={{ color: assignRandom }}
    >
      <h1>Quotes</h1>
      <p>{currentUser.quote}</p>
      <p>{currentUser.author}</p>
      <button onClick={changeUser} style={{ color: assignRandom }}>
        <i className="fa-solid fa-truck-fast"></i>
      </button>
    </div>
  );
};

export default QuoteBox;
