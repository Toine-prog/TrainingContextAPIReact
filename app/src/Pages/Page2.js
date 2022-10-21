import React, { useState } from "react";
import Form from "../components/Form";
import ResponseForm from "../components/ResponseForm";

const Page2 = () => {
  const [dataForm, setDataForm] = useState({});

  const saveData = (data) => {
    setDataForm(data);
  };
  //TODO: Réceptionner les éléments du submit du form pour les transmettre à "ResponseForm"
  return (
    <div className="page">
      <h2>Remplisser le formulaire</h2>
      <Form saveData={saveData} />
      <div>
        <h2>Vos réponses</h2>
        {dataForm && (
          <ResponseForm
            name={dataForm.name}
            email={dataForm.email}
            age={dataForm.age}
            mdp={dataForm.mdp}
          />
        )}{" "}
        : {}
      </div>
    </div>
  );
};

export default Page2;
