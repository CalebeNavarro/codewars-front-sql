import { useEffect, useState } from "react";
import { StudentInfo } from './../../providers/NameEnabler'
import DevCard from './../../components/DevCard';
import { MainStyle } from "./style";
import { Navigate } from "react-router-dom";

const Dashboard = ({enabler, isEnabler, enablerAndDevs}) => {
  let totalHonor = 0;
  if (isEnabler) {
    totalHonor = enabler.students.reduce((a, b) => a + b.user.current_honor, 0);
  } else {
    totalHonor = enablerAndDevs.reduce((a, b) => a + b.user.current_honor, 0);
  }
  

  return (
    <MainStyle>
      <h2>Total de honor {totalHonor}</h2>
      {
        isEnabler
          ? (
            enabler.students.map((user, index) => (
              <DevCard key={user.id} user_id={user.user.id} enabler_id={user.id} position={index + 1}
                dev={user.user} 
              />
            ))
          )
          : (
            enablerAndDevs.map((user, index)=> (
              <DevCard key={user.id} user_id={user.user.id} enabler_id={user.id} position={index + 1}
                dev={user.user} 
              />
            ))
          )
      }

    </MainStyle>
  )
}

export default Dashboard;