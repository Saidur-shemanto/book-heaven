import { Outlet } from "react-router-dom";
import NavBar from "../header/NavBar";
import Footer from "../footer/Footer";

export default function HomePage() {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}