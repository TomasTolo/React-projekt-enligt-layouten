import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/uppgift2">Uppgift 2</Link></li>
        <li><Link to="/uppgift3">Uppgift 3</Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar
