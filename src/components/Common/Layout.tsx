import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";

const Layout = () => {
    return <>
        <Header />
            <main>
                <Banner />
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
        <Footer />
    </>
}
export default Layout;