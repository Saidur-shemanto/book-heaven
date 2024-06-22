import { useLoaderData, useParams } from "react-router-dom"
import { setRead, setWish } from "../utility/localStorage"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BookDetails() {
    const id = useParams()
    const books = useLoaderData()
    const book = books.find(book => book.bookId === parseInt(id.bookId))
    const handleRead = () => {
        const res = setRead(String(id.bookId))
        if (res) {
            toast.success("Added to read!");
        } else {
            toast.error("Already added to read!");
        }




    }
    const handleWish = () => {
        const res = setWish(String(id.bookId))
        if (res) {
            toast.success("Added to WishList");
        } else {
            toast.error("Already has been read!");
        }
    }




    return (
        <div className="flex flex-col lg:flex-row container mx-auto h-full gap-12">
            <img src={book.image} alt="" className="w-[36rem] h-[45rem] rounded-2xl" />
            <div className="flex flex-col gap-5 pl-2 lg:pl-0">
                <p className="text-5xl font-bold">{book.bookName}</p>
                <p className="text-xl font-medium">by: {book.author}</p>
                <hr />
                <p className="text-xl font-medium">{book.category}</p>
                <hr />
                <p><span className="font-bold">Review:</span> {book.review}</p>
                <div className="flex gap-4 items-center">
                    <p className="font-bold text-base">Tag</p>
                    <div className="flex">
                        {book.tags.map(id => <p key={id} className="bg-[#23BE0A0D] rounded-3xl text-[#23BE0A] p-1">#{id}</p>)}
                    </div>

                </div>

                <hr />
                <div>


                    <p>Number Of Pages: <span className="font-semibold">{book.totalPages}</span></p>
                    <p>Publisher: <span className="font-semibold">{book.publisher}</span></p>
                    <p>Year Of Publishing: <span className="font-semibold">{book.yearOfPublishing}</span></p>
                    <p>Rating: <span className="font-semibold">{book.rating}</span></p>
                </div>
                <div className="flex gap-4">
                    <button onClick={handleRead} className="btn px-7 py-4 ">Read</button>
                    <button onClick={handleWish} className="btn bg-[#50B1C9] px-7 py-4 text-white">WishList</button>
                </div>
                <ToastContainer />
            </div>





        </div>
    )
}