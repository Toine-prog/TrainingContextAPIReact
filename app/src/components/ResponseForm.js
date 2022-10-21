import React from "react";

const ResponseForm = ({ name, email, age, mdp }) => {
  return (
    <div>
      <ul>
        <li>name : {name}</li>
        <li>email : {email}</li>
        <li>age : {age}</li>
        <li>mot de passe : {mdp}</li>
      </ul>
    </div>
  );
};

export default ResponseForm;
