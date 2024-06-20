import { useEffect, useState } from "react"
import BookIndiv from "./BookIndiv"

export default function BookList() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("./data/books.json")
            .then(res => res.json())
            .then(book => setBooks(book))

    }, [])
    return (
        <div>
            <p className="font-bold text-4xl text-center">Books</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                {books.map(book => <BookIndiv key={book.bookId} book={book}></BookIndiv>)}

            </div>


        </div>
    )
}