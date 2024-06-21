import { useLoaderData } from "react-router-dom";
import { getRead } from "../../utility/localStorage";
import ReadIndiv from "./ReadIndiv";
import { useContext, useState } from "react";
import { AsserContext } from "../ListedBooks";

const Read = () => {
    const menu = useContext(AsserContext)
    const readList = getRead();
    const books = useLoaderData();
    const readBooks = books.filter(book => readList.includes(String(book.bookId)))
    console.log(menu)
    if (menu !== "") {
        readBooks.sort((a, b) => b[menu] - a[menu]);
    }





    return (
        <div className="w-full">
            {readBooks.map(book => <ReadIndiv key={book.bookId} book={book}></ReadIndiv>)}

        </div>
    )
};

export default Read;
