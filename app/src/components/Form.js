import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Form = ({ saveData }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Votre nom doit être renseigné"),
    email: yup.string().email().required("Veuillez renseigner un email valide"),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18)
      .max(65)
      .required("Entrer un age valide (18-65)"),
    mdp: yup
      .string()
      .min(6)
      .max(12)
      .required("Le mot de passe doit avoir entre 6 et 12 caractères"),
    mdpConfirm: yup
      .string()
      .oneOf(
        [yup.ref("mdp"), null],
        "Ce mot de passe ne correspond au précédent"
      )
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    saveData(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full Name..." {...register("name")} />
        <p className="error">{errors.name?.message}</p>
        <input type="text" placeholder="Email..." {...register("email")} />
        <p className="error">{errors.email?.message}</p>
        <input type="number" placeholder="Age..." {...register("age")} />
        <p className="error">{errors.age?.message}</p>
        <input type="password" placeholder="password..." {...register("mdp")} />
        <p className="error">{errors.mdp?.message}</p>
        <input
          type="password"
          placeholder="Confirm password..."
          {...register("mdpConfirm")}
        />
        <p className="error">{errors.mdpConfirm?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
