import React, {useEffect} from "react";
import classes from './Navbar.less'
import './Navbar.less'
import {Link, NavLink} from "react-router-dom";

const Navbar = (props) => {



    return props.isA ?(
            <nav>
                <div>
                    <Link to="/">InHunt</Link>
                    <ul>
                        <li>
                            <NavLink to="/profile">My Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/search">Search Friend</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Unlogin</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
    ) :
        <nav>
            <div>
                <Link to="/">InHunt</Link>
                <ul>
                    <li>
                        <NavLink to="/">Start Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>

                </ul>
            </div>
        </nav>
}

export default Navbar