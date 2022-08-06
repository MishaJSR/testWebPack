import React, {useEffect} from "react";
import classes from './Navbar.less'
import './Navbar.less'

const Navbar = (props) => {



    return props.isA ?(
            <div className="navb">
                Navbar Auth
            </div>
    ) :
        <div className="navb">
            Navbar Not Auth
        </div>
}

export default Navbar