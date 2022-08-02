import React from "react";
import classes from './App.less'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./main/Main";

const App = () => {


    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default App