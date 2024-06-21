import { useLoaderData } from "react-router-dom";
import { getRead } from "../../utility/localStorage";
import ReadIndiv from "./ReadIndiv";

const Read = () => {
    const readList = getRead();
    const books = useLoaderData();
    const readBooks = books.filter(book => readList.includes(String(book.bookId)))




    return (
        <div>
            {readBooks.map(book => <ReadIndiv key={book.bookId} book={book}></ReadIndiv>)}

        </div>
    )
};

export default Read;
