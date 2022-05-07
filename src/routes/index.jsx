import {
  Routes,
  Route
} from "react-router-dom";
import Dashboard from '../pages/Dashboard/index'
import Header from '../components/Header'
import HomeStyle from '../pages/Home/index';
import Menu from "../components/Menu";
import Profile from '../components/profile';
import Perfil from "../pages/Perfil";
import { useEffect, useState } from "react";
import api_kenzie from "../services/api_kenzie";

const MyRoutes = () => {
  const [ enabler, setEnabler ] = useState({});
  const [ enablerAndDevs, setEnablerAndDevs ] = useState([]);
  const [ isEnabler, setIsEnabler ] = useState(false);

  const getEnabler = async (uri, id = "") => {
    if (id) {
      await api_kenzie.get(`/${uri}/${id}`)
      .then(response => {
        response.data["students"].sort((a,b) => b["user"].current_honor - a["user"].current_honor)
        setEnabler(response.data)
      })
      setIsEnabler(true);
    } else {
      await api_kenzie.get(`/${uri}`)
      .then(response => {
        response.data.sort((a,b) => b["user"].current_honor - a["user"].current_honor)
        setEnablerAndDevs(response.data)
      })
      setIsEnabler(false);
    }
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<HomeStyle/>}/>
      <Route path="/dashboard" element={<>
        <Header getEnabler={getEnabler}/>
        <Dashboard enabler={enabler} isEnabler={isEnabler} enablerAndDevs={enablerAndDevs}/>
        <Menu />
        </>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/user" element={<>
        <Perfil />
        <Menu />
      </>}/>
    </Routes>
    </>
  );
};

export default MyRoutes;
