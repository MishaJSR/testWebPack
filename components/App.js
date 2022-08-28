import React, {useEffect} from "react";
import AppRoute from "../router/routes";
import Navbar from "./Navbar/Navbar";
import './App.less'

const App = () => {

    return (
        <div>
                <Navbar/>
            <div className="grey-background">
                <AppRoute/>
            </div>
        </div>
    )
}

export default App
