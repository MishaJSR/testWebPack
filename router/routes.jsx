import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import FindFr from "../components/FindFr/FindFr";
import Messager from "../components/Messager/Messager";
import Profile from "../components/Profile/Profile";
import StartPage from "../components/StartPage/StartPage";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";

const AppRoute = ({isAuth}) => {

    return isAuth ?(
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/profile/:idUser" element={<Profile />} />
                <Route path="/search" element={<FindFr />} />
                <Route path="/messages" element={<Messager />} />
                <Route path="*" element={<StartPage/>}/>
            </Routes>
    ) :
        (
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="*" element={<Login />}/>
            </Routes>
        )

}

export default AppRoute