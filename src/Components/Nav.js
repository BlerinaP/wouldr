import React from 'react'
import {NavLink} from "react-router-dom"

const NavBar = (logged) => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" exact activeClassName="selected">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/new"  className="nav-link" exact  activeClassName="selected">New Question</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/leader"  className="nav-link" exact activeClassName="selected">Leader Board</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/logout" className="nav-link"  exact activeClassName="selected">Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <h1 style={{color: "#fff", fontSize: '20px'}}>
                            Welcome {logged.logged.name}
                        </h1>
                        <div className="profileImage-holder-nav ml-4">
                            <img src={logged.logged.avatarURL} alt=""/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar