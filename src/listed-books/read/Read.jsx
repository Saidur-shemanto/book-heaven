import { useLoaderData } from "react-router-dom";
import { getRead } from "../../utility/localStorage";
import ReadIndiv from "./ReadIndiv";
import { useContext, useState } from "react";
import { AsserContext } from "../ListedBooks";
import { AuthContext } from "../../authentication/AuthProvider";

const Read = () => {
    const { user } = useContext(AuthContext)

    const menu = useContext(AsserContext)
    const readList = getRead(user.uid);
    const books = useLoaderData();
    const readBooks = books.filter(book => readList.includes(String(book.bookId)))
    if (menu !== "") {
        readBooks.sort((a, b) => b[menu] - a[menu]);
    }





    return (
        <div className="w-full flex flex-col gap-2">
            {readBooks.map(book => <ReadIndiv key={book.bookId} book={book}></ReadIndiv>)}

        </div>
    )
};

export default Read;
