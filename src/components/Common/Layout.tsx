import React, { Suspense } from "react";
import { Outlet , useLocation } from "react-router-dom";

import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Fab from "./Fab/Fab";


const Layout: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const containsCharacter = currentPath.includes("character");
    return <>
        <Header />
        <main>
            <Banner />
            <Suspense>
                <Outlet />
            </Suspense>
            <Fab download={!containsCharacter} />
        </main>
        <Footer />
    </>;
};
export default Layout;