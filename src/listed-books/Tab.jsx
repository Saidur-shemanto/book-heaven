import { useState } from "react";
import { NavLink } from "react-router-dom";
const Tab = () => {
    const [click, setClick] = useState(0)
    return (
        <div role="tablist" className="tabs tabs-lifted w-full lg:w-1/4 mb-1">
            <NavLink onClick={() => { setClick(0) }} role="tab" className={`tab ${!click ? "tab-active" : ""}`} to='read'>Read Books</NavLink>
            <NavLink onClick={() => { setClick(1) }} role="tab" className={`tab ${click ? "tab-active" : ""}`} to='wishlist'>WishList Books</NavLink>
        </div>
    )
};

export default Tab;
