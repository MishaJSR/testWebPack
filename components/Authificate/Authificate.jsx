import React, {useEffect} from "react";
import classes from './Authificate.less'

const Authificate = () => {



    return (
        <div className="login_page">
            <div className="form">
                <form className="login_form">
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="password"/>
                    <button className="but-login">Login</button>
                        <p className="p-not-reg">Not registered? </p>
                            <a className="a-create-acc" href="">Create an account</a>

                </form>
            </div>
        </div>
    )
}

export default Authificate