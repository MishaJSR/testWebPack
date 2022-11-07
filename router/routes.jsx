import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import FindFr from "../components/FindFr/FindFr";
import Chats from "../components/Chats/Chats";
import Profile from "../components/Profile/Profile";
import StartPage from "../components/StartPage/StartPage";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Messager from "../components/MessageField/Messager";

const AppRoute = ({isAuth}) => {

    return isAuth ?(
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/profile/:idUser" element={<Profile />} />
                <Route path="/search" element={<FindFr />} />
                <Route path="/messages" element={<Chats />} />
                <Route path="/messages/:idChat" element={<Messager />} />
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