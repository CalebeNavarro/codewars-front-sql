import { MenuStyled } from "./style"
import { Link } from "react-router-dom";


export default function Menu({}) { 
  return (
      <MenuStyled>
        <details>
          <summary></summary>
          <nav className="menu">
            <Link to="/user">Profile</Link>
            <Link to="/signin">Sign in</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
        </details>
      </MenuStyled>
  )
}