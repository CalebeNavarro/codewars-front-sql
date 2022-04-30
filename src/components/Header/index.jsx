import {HeaderStyle} from './style'
import Button from '../Button'
import { StudentInfo } from '../../providers/NameEnabler';
import api_kenzie from '../../services/api_kenzie';
import { useEffect, useState } from "react";


export default function Header({getEnabler}) {
  const [ enablers, setEnablers ] = useState([]);

  const foo = async () => {
    api_kenzie.get("/enabler")
    .then(response => setEnablers(response.data))
  }

  useEffect(() => {
    foo()
  }, []);

  return (
    <HeaderStyle>
      {/* <img src="Kenzie logo" alt="Kenzie logo"/> */}
    <nav>
      <a onClick={() => getEnabler("enabler")}>Todos Facilitadores</a>
      <a onClick={() => getEnabler("student")}>Todos alunos</a>
      {enablers.map(enabler =>(
        <a key={enabler.id} onClick={() => getEnabler("enabler", enabler.id)} >
          {enabler.user.name}
        </a>
      ))}
    </nav>
    </HeaderStyle>
  )
}