import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";
import api_kenzie from "../../services/api_kenzie";

const StudentContext = createContext();

export const NameEnabler = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@token") || null) 
  );
  const [isLogin, setIsLogin] = useState(false);
  const [student, setStudent] = useState("");

  useEffect(() => {
    if(token) {
      getInfoUser(token)
    }
  }, [token])

  const login = (data, setError) => {
    api_kenzie.post("/login", data)
    .then(response => {
      localStorage.setItem("@token", JSON.stringify(response.data["access_token"]))
      setToken(response.data["access_token"])
    }).catch(error => {
      if (error.response) {
        setError(error.response.data)
      }
    })
  }

  const getInfoUser = () => {
    api_kenzie.get("/student/who_i_am", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setStudent(response.data)
      setIsLogin(true);
    })
    .catch(error => {
      if(error.response) {
        console.log(error.resopnse.data)
      }
    })
  }



  return (
    <StudentContext.Provider
      value={{login, isLogin, token, student, getInfoUser, isLogin, setIsLogin}}
    >
      {children}
    </StudentContext.Provider>
  )
}

export const StudentInfo = () => useContext(StudentContext);
