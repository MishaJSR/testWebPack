import React from "react";
import { Route, Routes} from "react-router-dom";
import FindFr from "../components/FindFr/FindFr";
import Main from "../components/main/Main";
import {useDispatch, useSelector} from "react-redux";

const AppRoute = () => {

    const dispatch = useDispatch()

    const isAuth = useSelector(state => state.users.activeUser.isActive)

    return isAuth ?(
            <Routes>
                <Route path="/search" element={<FindFr />} />
                <Route path="*" element={<Main />} />
            </Routes>
    ) :
        <Routes>
            <Route path="*" element={<Main />} />
        </Routes>
}

export default AppRoute