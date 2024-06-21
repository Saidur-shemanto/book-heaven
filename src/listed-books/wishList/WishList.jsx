import { useLoaderData } from "react-router-dom";
import { getWish } from "../../utility/localStorage";
import WishIndiv from "./WishIndiv";

const WishList = () => {
    const wishList = getWish();
    const books = useLoaderData();
    const wishBooks = books.filter(book => wishList.includes(String(book.bookId)))




    return (
        <div>
            {wishBooks.map(book => <WishIndiv key={book.bookId} book={book}></WishIndiv>)}

        </div>
    )
};

export default WishList;
