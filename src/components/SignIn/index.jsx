import { UserStyled } from "../../pages/Perfil/style";
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import api_kenzie from "../../services/api_kenzie";
import { useState } from "react";
import { StudentInfo } from "../../providers/NameEnabler";


const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required("Password is required")
});

const SignIn = ({setIsAlreadyRegister}) => {
  const { login } = StudentInfo();

  const [ error, setError ] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    login(data, setError)
  }
  return (
    <UserStyled>
    <h1>Login</h1>
    {error.message && <p>{error.message}</p>}
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField id="outlined-basic1" autoComplete="username" label="Email" variant="outlined" {...register("email")}/>
      {errors.email && <p>{errors.email.message}</p>}
      <TextField id="outlined-basic2" autoComplete="new-password" type="password" label="Password" variant="outlined" {...register("password")}/>
      {errors.password && <p>{errors.password.message}</p>}
      <Button type="submit" variant="contained" endIcon={<SendIcon />}>Sign In</Button>
    </form>
    <p>Or</p>
    <button>
      Google account Login
    </button>
    <p>Ainda não tem uma conta? <button onClick={() => setIsAlreadyRegister(false)}>Cadastrar!</button></p>
  </UserStyled>
  )
}

export default SignIn;