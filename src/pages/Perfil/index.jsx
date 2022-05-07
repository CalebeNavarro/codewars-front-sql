import { useState } from "react";
import SignIn from "../../components/SignIn";
import Register from "../../components/Register"
import { StudentInfo } from "../../providers/NameEnabler";
import UserPerfil from "../../components/UserPerfil";


const Perfil = () => {
  const [ isAlreadyRegister, setIsAlreadyRegister ] = useState(true);
  const { isLogin } = StudentInfo();

  return (
    isLogin ?
      <UserPerfil />
    : isAlreadyRegister 
      ? <SignIn setIsAlreadyRegister={setIsAlreadyRegister}/> 
      : <Register setIsAlreadyRegister={setIsAlreadyRegister}/>
  )
}

export default Perfil;