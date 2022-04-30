import { UserStyled } from '../../pages/Perfil/style';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required("Password is required")
    .max(15).min(4),
  passwordConfirmation: yup.string()
  .oneOf([yup.ref('password'), null], 'Passwords must match')
});



const Register = ({setIsAlreadyRegister}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    console.log(data);
  }

  return (
    <UserStyled>
    <h1>Cadastrar</h1>
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField id="outlined-basic1" autoComplete="username" label="Email" variant="outlined" {...register("email")}/>
      {errors.email && <p>{errors.email.message}</p>}
      <TextField id="outlined-basic2" autoComplete="new-password" type="password" label="Password" variant="outlined" {...register("password")}/>
      {errors.password && <p>{errors.password.message}</p>}
      <TextField id="outlined-basic3" autoComplete="new-password" type="password" label="Confirm Password" variant="outlined" {...register("passwordConfirmation")}/>
      {errors.passwordConfirmation && <p>{errors.passwordConfirmation.message}</p>}
      <Button type="submit" variant="contained" endIcon={<SendIcon />}>Register</Button>
    </form>
    <p>Or</p>
    <button>
      Google account
    </button>
    <p>Já tem uma conta? <button onClick={() => setIsAlreadyRegister(true)}>Fazer login!</button></p>
  </UserStyled>
  )
}

export default Register;