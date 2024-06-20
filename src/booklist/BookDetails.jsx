import { useLoaderData, useParams } from "react-router-dom"

export default function BookDetails() {
    const id = useParams()
    const books = useLoaderData()
    const book = books.find(book => book.bookId === parseInt(id.bookId))




    return (
        <div className="flex flex-col lg:flex-row container mx-auto h-full gap-12">
            <img src={book.image} alt="" className="w-[36rem] h-[45rem] rounded-2xl" />
            <div className="flex flex-col gap-5">
                <p className="text-5xl font-bold">{book.bookName}</p>
                <p className="text-xl font-medium">by: {book.author}</p>
                <hr />
                <p className="text-xl font-medium">{book.category}</p>
                <hr />
                <p><span className="font-bold">Review:</span> {book.review}</p>
                <p className="font-bold">Tag: </p>
                <hr />
                <div>


                    <p>Number Of Pages: <span className="font-semibold">{book.totalPages}</span></p>
                    <p>Publisher: <span className="font-semibold">{book.publisher}</span></p>
                    <p>Year Of Publishing: <span className="font-semibold">{book.yearOfPublishing}</span></p>
                    <p>Rating: <span className="font-semibold">{book.rating}</span></p>
                </div>
                <div className="flex gap-4">
                    <button className="btn px-7 py-4">Read</button>
                    <button className="btn bg-[#50B1C9] px-7 py-4">WishList</button>
                </div>
            </div>





        </div>
    )
}