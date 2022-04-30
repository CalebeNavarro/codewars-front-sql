import { HomeStyle, DivStyle } from './style'
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <HomeStyle>
    <Link to="/dashboard">
      <button>welcome to codewarsKenzie!</button>
    </Link>
  </HomeStyle>
  )
}

export default Home;