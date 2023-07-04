import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  firstName: string,
  lastName: string,  
  email: string;
  password: string;
}

const Form1: FC = () => {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm<IFormInputs>();

  const formSubmitHandler: SubmitHandler<IFormInputs> = (formdata: IFormInputs) => {
      alert(formdata.firstName + ' ' + formdata.lastName + ' ' + formdata.email + ' ' + formdata.password);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <text>firstName: </text>
        <input {...register('firstName', { required: true, pattern: /^[A-Za-z]+$/i })} /><br />
        {errors.firstName && <span className="invalid_field">First name is required (characters only).</span>}<br />
        <text>lastName: </text>
        <input {...register('lastName', { required: true, pattern: /^[A-Za-z]+$/i })} /><br />
        {errors.lastName && <span className="invalid_field">Last name is required (characters only).</span>}<br />
        <text>email: </text>
        <input {...register('email', { required: true })} /><br />
        {errors.email && <span className="invalid_field">Email is required.</span>}<br />
        <text>password: </text>
        <input {...register('password', { required: true, minLength: 8 })} /><br />
        {errors.password && <span className="invalid_field">Password is required.</span>}<br />
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form1;