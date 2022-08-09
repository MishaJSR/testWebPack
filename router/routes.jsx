import React from "react";
import { Route, Routes} from "react-router-dom";
import FindFr from "../components/FindFr/FindFr";
import Main from "../components/main/Main";
import {useDispatch, useSelector} from "react-redux";
import Profile from "../components/Profile/Profile";
import StartPage from "../components/StartPage/StartPage";
import Authificate from "../components/Authificate/Authificate";

const AppRoute = () => {

    const dispatch = useDispatch()

    const isAuth = useSelector(state => state.users.activeUser.isActive)

    return isAuth ?(
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<FindFr />} />
                <Route path="/messages" element={<Main />} />
                <Route path="*" element={<StartPage />} />
            </Routes>
    ) :
        (
            <Routes>
                <Route path="/login" element={<Authificate />} />
                <Route path="*" element={<Authificate />} />
            </Routes>
        )

}

export default AppRoute