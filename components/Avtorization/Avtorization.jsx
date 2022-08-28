import React, {useEffect} from "react";
import classes from './Avtorization.less'

const Avtorization = () => {



    return (
        <div className="login_page">
            <div className="form">
                <form className="login_form">
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="password"/>
                    <button className="but-login">Auth Me!</button>

                </form>
            </div>
        </div>
    )
}

export default Avtorization