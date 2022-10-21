import React from "react";
import Form from "../components/Form";
import ResponseForm from "../components/ResponseForm";

const Page2 = () => {
  const name = "";
  const email = "";
  const age = "";
  const mdp = "";
  //TODO: Réceptionner les éléments du submit du form pour les transmettre à "ResponseForm"
  return (
    <div className="page">
      <h2>Remplisser le formulaire</h2>
      <Form />
      <div>
        <h2>Vos réponses</h2>
        <ResponseForm name={name} email={email} age={age} mdp={mdp} />
      </div>
    </div>
  );
};

export default Page2;
