import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import FindFr from "../components/FindFr/FindFr";
import Main from "../components/main/Main";
import Profile from "../components/Profile/Profile";
import StartPage from "../components/StartPage/StartPage";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";

const AppRoute = ({isAuth}) => {

    return isAuth ?(
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/search" element={<FindFr />} />
                <Route path="/messages" element={<Main />} />
                <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
    ) :
        (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="*" element={<Navigate to="/login" replace />}/>
            </Routes>
        )

}

export default AppRoute