import z from "zod";
import {useForm} from "react-hook-form";


export const Form = ({ onSubmit = (data) => {}, defaultVals=[], optionalTypes=[], add_classNames }) => {
    const { register, handleSubmit, defaultValues, reset } = useForm({ defaultValues: defaultVals });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${add_classNames}`}>
      {defaultVals.map((val, i) => (
        <>
        <input type={optionalTypes[i]} min={optionalTypes[i] === "date" ? new Date().toISOString().slice(0, 10) : null} placeholder={`${val[0].toUpperCase() + val.substring(1)}`} {...register(val)}></input>
        </>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};