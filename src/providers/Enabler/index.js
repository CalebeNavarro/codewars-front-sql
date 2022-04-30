import { createContext, useContext, useState, useEffect } from "react";
import api_kenzie from "../../services/api_kenzie";

const EnablerContext = createContext();

export const EnablerProvider = ({ children }) => {
  const [ listEnabler, setListEnabler ] = useState({});

  useEffect(() => {
    getAllListEnablers()
  }, [])

  const getAllListEnablers = () => {
    api_kenzie.get("/enabler")
    .then(response => setListEnabler(response.data))
    .catch(error => {
      if(error.response) {
        console.log(error.resopnse.data)
      }
    })
  }

  return (
    <EnablerContext.Provider
      value={{listEnabler}}
    >
      {children}
    </EnablerContext.Provider>
  )
}

export const EnablerInfo = () => useContext(EnablerContext);
