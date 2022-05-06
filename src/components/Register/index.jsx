import { UserStyled } from '../../pages/Perfil/style';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import api_kenzie from '../../services/api_kenzie';

import { toast } from 'react-toastify';



const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required().min(2).max(40),
  username: yup.string().required().min(2).max(40),
  password: yup.string().required("Password is required")
    .max(15).min(4),
  passwordConfirmation: yup.string()
  .oneOf([yup.ref('password'), null], 'Passwords must match')
});



const Register = ({setIsAlreadyRegister}) => {
  const notify = (message) => toast(message);

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    delete data.passwordConfirmation
    api_kenzie.post("/student", data)
    .then(response => {
      notify("Conta criada!");
      setIsAlreadyRegister(true);
    })
    .catch(error => {
      if(error.response) {
        notify(error.response.data.message);
      }
    })
  }

  return (
    <UserStyled>
    <h1>Cadastrar</h1>
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField id="outlined-basic1" autoComplete="email" label="Email" variant="outlined" {...register("email")}/>
      {errors.email && <p>{errors.email.message}</p>}

      <TextField id="outlined-basic6" autoComplete="name" label="Name" variant="outlined" {...register("name")}/>
      {errors.name && <p>{errors.name.message}</p>}

      <TextField id="outlined-basic4" autoComplete="username" label="Username" variant="outlined" {...register("username")}/>
      {errors.username && <p>{errors.username.message}</p>}

      <TextField id="outlined-basic2" autoComplete="new-password" type="password" label="Password" variant="outlined" {...register("password")}/>
      {errors.password && <p>{errors.password.message}</p>}

      <TextField id="outlined-basic3" autoComplete="new-password" type="password" label="Confirm Password" variant="outlined" {...register("passwordConfirmation")}/>
      {errors.passwordConfirmation && <p>{errors.passwordConfirmation.message}</p>}

      <Button type="submit" variant="contained" endIcon={<SendIcon />}>Register</Button>
    </form>
    <p>Já tem uma conta? <button onClick={() => setIsAlreadyRegister(true)}>Fazer login!</button></p>
  </UserStyled>
  )
}

export default Register;