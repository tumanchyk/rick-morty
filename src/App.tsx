import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Layout from "./components/Common/Layout";
import Home from "./pages/Home";
import Character from "./pages/Character";
import { setActions } from "./store/history/historySlice";

const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const storedActionsString = window.localStorage.getItem("ActionList");
        const storedActions = storedActionsString ? JSON.parse(storedActionsString) : [];
        dispatch(setActions(storedActions));
    }, []);
  
    return <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="character/:id" element={<Character/>}/>
            <Route path="*" element={<Home />} />
        </Route>
    </Routes>;
};

export default App;
