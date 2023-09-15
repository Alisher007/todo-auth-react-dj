import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import './Nav.css'

const Nav = () => {
    let { user, logoutUser } = useContext(AuthContext)
    return (
        <div className="navbar"> {/* Add the 'navbar' class */}
            <Link to="/" className="logo">Home</Link> {/* Add the 'logo' class */}
            <span className='divider'>|</span>
            <br />
            {user ? (
                <div>
                    <Link to="/todos"> Todos</Link>
                    <button className="logout" onClick={logoutUser}>Logout</button> {/* Add the 'logout' class */}
                </div>
            ) : (
                    <Link to="/login">Login</Link>
                )}

            {user && <p className="username">Hello {user.username}</p>} {/* Add the 'username' class */}
        </div>
    )
}

export default Nav