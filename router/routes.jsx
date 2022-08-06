import React from "react";
import { Route, Routes} from "react-router-dom";
import FindFr from "../components/FindFr/FindFr";
import Main from "../components/main/Main";

const AppRoute = () => {


    return (
            <Routes>
                <Route path="/options" element={<FindFr />} />
                <Route path="*" element={<Main />} />
            </Routes>
    )
}

export default AppRoute