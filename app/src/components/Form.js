import React, { useRef } from "react";

const Form = () => {
  const formData = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: Utilsier https://codesandbox.io/s/vmwxjnv433?file=/src/index.js:237-255 pour gérer le ref du form
  };
  return (
    <div>
      <form ref={formData} onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name..." />
        <input type="text" placeholder="Email..." />
        <input type="number" placeholder="Age..." />
        <input type="password" placeholder="password..." />
        <input type="password" placeholder="Confirm password..." />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
