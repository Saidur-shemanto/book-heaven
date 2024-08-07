import { useLoaderData } from "react-router-dom";
import { getWish } from "../../utility/localStorage";
import WishIndiv from "./WishIndiv";
import { useContext } from "react";
import { AsserContext } from "../ListedBooks";
import { AuthContext } from "../../authentication/AuthProvider";


const WishList = () => {
    const menu = useContext(AsserContext)
    const { user } = useContext(AuthContext)
    const wishList = getWish(user.uid);

    const books = useLoaderData();
    const wishBooks = books.filter(book => wishList.includes(String(book.bookId)))
    if (menu !== "") {
        wishBooks.sort((a, b) => b[menu] - a[menu]);
    }




    return (
        <div className="w-full flex flex-col gap-2">
            {wishBooks.map(book => <WishIndiv key={book.bookId} book={book}></WishIndiv>)}

        </div>
    )
};

export default WishList;
