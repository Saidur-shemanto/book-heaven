import { Outlet } from "react-router-dom";
import Tab from "./Tab";

export default function ListedBooks() {
    return (
        <div className="mx-auto container">
            <Tab></Tab>

            <Outlet></Outlet>
        </div>
    )

}