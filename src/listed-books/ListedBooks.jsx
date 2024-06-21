import { Outlet } from "react-router-dom";
import Tab from "./Tab";
import { RiArrowDropDownLine } from "react-icons/ri";
import { createContext, useState } from "react";
export const AsserContext = createContext("")
export default function ListedBooks() {

    const [menu, setMenu] = useState("")
    return (
        <div className="flex flex-col mx-auto container items-start">
            <div className="dropdown self-center">
                <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">Sort By <RiArrowDropDownLine className="text-3xl" /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a onClick={() => setMenu('rating')}>Ratings</a></li>
                    <li><a onClick={() => setMenu('totalPages')}>Number Of Pages</a></li>
                    <li><a onClick={() => setMenu('yearOfPublishing')}>Publisher Year</a></li>
                </ul>
            </div>
            <Tab></Tab>
            <AsserContext.Provider value={menu}>
                <Outlet></Outlet>
            </AsserContext.Provider>
        </div>
    )

}