import React, { useState } from "react";

const Contact = () => {
  let [name, setName] = useState("Initial");
  return (
    <div className="contact">
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="email" placeholder="email" />
        <button onClick={console.log(name)}>Press</button>
        <p>{name}</p>
      </form>
    </div>
  );
};

export default Contact;
