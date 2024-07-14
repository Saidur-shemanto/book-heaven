import { Outlet } from "react-router-dom";
import NavBar from "../header/NavBar";
import Footer from "../footer/Footer";

export default function HomePage() {
    return (
        <>
            <NavBar></NavBar>
            <div className="min-h-[70vh]">
                <Outlet></Outlet>

            </div>

            <Footer></Footer>
        </>
    )
}