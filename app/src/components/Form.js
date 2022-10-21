import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ saveData }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    saveData(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full Name..." {...register("name")} />
        <input type="text" placeholder="Email..." {...register("email")} />
        <input type="number" placeholder="Age..." {...register("age")} />
        <input type="password" placeholder="password..." {...register("mdp")} />
        <input
          type="password"
          placeholder="Confirm password..."
          {...register("mdpConfirm")}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
