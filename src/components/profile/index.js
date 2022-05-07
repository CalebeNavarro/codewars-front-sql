import AnyChart from 'anychart-react'
import { Modal } from './style';
import api_kenzie from '../../services/api_kenzie';
import anychart from 'anychart'
import { useEffect, useState } from 'react';

const Profile = ({user, user_id}) => {
  const [ honors, setHonors ] = useState([]);


  const getHonors = (user_id) => {
    api_kenzie.get(`/users/${user_id}/honors`)
      .then(response => {
        const resultDataFormat = dataFunction(response.data)
        setHonors(resultDataFormat)
      })
      .catch(error => {
      })
  }

  useEffect(() => {
    getHonors(user_id)
  }, [])



  const dataFunction = (arr) => {
    let result = "";

    arr.forEach(currentData => {
      
      result += `${currentData["data"].substring(5, 11).split(" ").join("/")},${currentData["honor"]}\n`
    });
    return result;
  }
  
  const complexSettings = {
    width: 800,
    height: 600,
    type: 'line',
    data: honors,
    title: user["name"],
    yAxis: [1, {
      orientation: 'right',
      enabled: true,
      labels: {
        format: '{%Value}{decimalPoint:\\,}',
        fontColor: 'blue'
      }
    }],

  };

  return (
    <Modal>
      <AnyChart
        {...complexSettings}
      />
    </Modal>
  )
}

export default Profile;