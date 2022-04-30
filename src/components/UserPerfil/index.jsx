import { UserProfileStyle } from "./style";
import { StudentInfo } from "../../providers/NameEnabler";
import { EnablerInfo } from "../../providers/Enabler";
import api_kenzie from "../../services/api_kenzie";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { toast } from 'react-toastify';


const schema = yup.object().shape({
  name: yup.string().max(30).min(1),
  username: yup.string().max(40).min(1),
  enabler_id: yup.string()
});



const UserPerfil = () => {
  const { student, getInfoUser, token } = StudentInfo();
  const { listEnabler } = EnablerInfo();

  const [ feedbackVisual, setFeedbackVisual ] = useState("");
  const [ enabler, setEnabler ] = useState("");
  const [ update, setUpdate ] = useState(false);
  const [ name, setName ] = useState(student["user"]?.name)
  const [ username, setUsername ] = useState(student["user"]?.username)

  useEffect(() => {
    findEnabler(2)
  }, [student]);

  const notify = (message) => toast(message);

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const updateStudentHonors = (student_id) => {
    api_kenzie.patch(`/student/${student_id}/honors`)
    .then(response => {
      setFeedbackVisual(response)
      getInfoUser()
    })
    .catch(error => {
      if(error.response) {
        setFeedbackVisual(error.response.data)
      }
    })
  }

  const findEnabler = (enabler_id) => {
    api_kenzie.get(`/enabler/${enabler_id}`)
    .then(response => {
      setEnabler(response.data)
    })
    .catch(error => {
      if(error.response) {
        setFeedbackVisual(error.response.data)
      }
    })
  }

  const onSubmit = async data => {
    if (data.enabler_id) {
      api_kenzie.put("/student", {"enabler_id": +data.enabler_id}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => console.log(response))
      .catch(error => {
        if(error.response) {
          console.log(error.resopnse.data);
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
        console.log(error.resopnse.data);
      }
    })
    getInfoUser();
    setUpdate(false);
  }

  return (
    <UserProfileStyle>
      <h1>Welcome</h1>
      <button onClick={() => setUpdate(true)}>Atualizar Perfil</button>

      {update ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <main>
            <div>
              <label htmlFor="">Name</label>
              <input type="text" {...register("name")} value={name} onChange={e => setName(e.target.value)}/>
            </div>
 
            <div>
              <button onClick={() => updateStudentHonors(student.id)}>Atualizar</button> 
              <p>Atual honra: {student["user"].current_honor}</p>
            </div>

            <div>
              <label htmlFor="">Username</label>
              <input value={username} {...register("username")} onChange={e => setUsername(e.target.value)}/>
            </div>

            <div>
              <label  >Seu atual facilitador: {enabler["user"]?.name}</label>
              <select {...register("enabler_id")}>
                <option >--Lista Facilitadores--</option>
                {listEnabler.map(enabler => (
                  <option key={enabler.id} value={enabler["id"]}>{enabler["user"].name}</option>
                ))}
              </select>
            </div>
          </main>
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>Atualizar</Button>
        </form>

      ) : (
        <main>
        <p>Name: {student["user"].name}</p>
        <div>
          <p>Atual honra: {student["user"].current_honor}</p>
        </div>
        <div>
          <p>Username: {student["user"].username}</p>
        </div>
        <p>Email: {student["user"].email}</p>
        <p>Facilitador: {enabler["user"]?.name}</p>
      </main>
      )}


      {feedbackVisual && <p>{feedbackVisual?.message}</p>}
    </UserProfileStyle>
  )
}

export default UserPerfil;