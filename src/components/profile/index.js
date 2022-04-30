import AnyChart from 'anychart-react'
import { Modal } from './style';


const Profile = ({user}) => {

  const arr = user["honors"];
  const dataFunction = (arr) => {
    let result = "";

    arr.forEach(currentData => {
      result += `${currentData["date"]},${currentData["honor"]}\n`
    });

    return result;
  }
  const data = dataFunction(arr);
  
  const complexSettings = {
    width: 800,
    height: 600,
    type: 'line',
    data: data,
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