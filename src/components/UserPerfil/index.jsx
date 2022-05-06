import { UserProfileStyle, TextField, MainContainer, TextFieldToUpdatedHonor } from "./style";
import { StudentInfo } from "../../providers/NameEnabler";
import { EnablerInfo } from "../../providers/Enabler";
import api_kenzie from "../../services/api_kenzie";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
import LogoutIcon from '@mui/icons-material/Logout';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { toast } from 'react-toastify';


const schema = yup.object().shape({
  name: yup.string().max(30).min(1),
  username: yup.string().max(40).min(1),
  enabler_id: yup.string()
});



const UserPerfil = () => {
  const { student, getInfoUser, token, setIsLogin } = StudentInfo();
  const { listEnabler } = EnablerInfo();

  const [ enabler, setEnabler ] = useState("");
  const [ update, setUpdate ] = useState(false);
  const [ name, setName ] = useState(student["user"]?.name)
  const [ username, setUsername ] = useState(student["user"]?.username)

  useEffect(() => {
    findEnabler(student.enabler_id)
  }, [student]);

  const notify = (message) => toast(message);

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const updateStudentHonors = (student_id) => {
    api_kenzie.patch(`/student/${student_id}/honors`)
    .then(response => {
      getInfoUser()
    })
    .catch(error => {
      if(error.response) {
        notify(error.response.data.message)
      }
    })
  }

  const findEnabler = (enabler_id) => {
    if (!enabler_id){
      return
    }
    api_kenzie.get(`/enabler/${enabler_id}`)
    .then(response => {
      setEnabler(response.data)
    })
    .catch(error => {
      if(error.response) {
        notify(error.response.data)
      }
    })
  }

  const logOut = () => {
    localStorage.clear()
    setIsLogin(false)
  }

  const onSubmit = async data => {
    if (data.enabler_id !== "Lista Facilitadores") {
      await api_kenzie.put("/student", {"enabler_id": data.enabler_id}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        notify(response.data.message)
      })
      .catch(error => {
        if(error.response) {
          notify(error.resopnse.data);
        }
      })
    }
    delete data.enabler_id;
    await api_kenzie.patch("/student",data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => notify("Updated!"))
    .catch(error => {
      if(error.response) {
        notify(error.resopnse.data);
      }
    })
    getInfoUser();
    setUpdate(false);
  }

  return (
    <UserProfileStyle>
      <h1>Welcome</h1>
      
      {update ? (
        <Button onClick={() => setUpdate(false)} variant="contained" endIcon={<ArrowBackIcon />}>Voltar</Button>
      ) : (
        <Button onClick={() => setUpdate(true)} variant="contained" endIcon={<UpgradeIcon />}>Atualizar Perfil</Button>
      )}


      {update ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
        >
          <MainContainer>
            <TextField>
              <label htmlFor="">Name</label>
              <input type="text" {...register("name")} value={name} onChange={e => setName(e.target.value)}/>
            </TextField>

            <TextField>
              <label htmlFor="">Username</label>
              <input value={username} {...register("username")} onChange={e => setUsername(e.target.value)}/>
            </TextField>

            <TextField>
              <label  >Seu atual facilitador: {enabler["user"]?.name}</label>
              <select {...register("enabler_id")}>
                <option key={null} value={null} >Lista Facilitadores</option>
                {listEnabler.map(enabler => (
                  <option key={enabler.id} value={enabler["id"]}>{enabler["user"].name}</option>
                ))}
              </select>
            </TextField>
            <Button type="submit" variant="contained" endIcon={<UpgradeIcon />}>Atualizar</Button>
          </MainContainer>

        </form>

      ) : (
        <MainContainer>
        <p><span>Name:</span> {student["user"].name}</p>
        <TextFieldToUpdatedHonor>
          <p><span>Atual honor:</span> {student["user"].current_honor}</p>
          <Button onClick={() => updateStudentHonors(student.id)} variant="contained">Atualizar</Button>
        </TextFieldToUpdatedHonor>
          <p><span>Username:</span> {student["user"].username}</p>
        <p><span>Email:</span> {student["user"].email}</p>
        <p><span>Facilitador:</span> {enabler["user"]?.name}</p>
      </MainContainer>
      )}

      <Button onClick={logOut} variant="contained" endIcon={<LogoutIcon />}>Logout</Button>
    </UserProfileStyle>
  )
}

export default UserPerfil;