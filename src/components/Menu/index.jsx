import { MenuStyled } from "./style"
import { Link } from "react-router-dom";


export default function Menu() {
  return (
      <MenuStyled>
        <details>
          <summary></summary>
          <nav >
            <Link to="/user">Profile</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
        </details>
      </MenuStyled>
  )
}