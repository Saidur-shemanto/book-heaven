import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function BookIndiv({ book }) {
    return (
        <Link to={`books/${book.bookId}`}><div className="card w-full bg-base-100 shadow-xl p-10 gap-4">
            <figure className="px-10 py-10 bg-[#F3F3F3] rounded-xl">
                <img src={book.image} alt="Shoes" className="rounded-xl h-56" />
            </figure>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">{book.bookName}</h2>
                <p className="font-medium text-base">by: {book.author}</p>
                <hr className="border-dashed border-black" />
                <div className="flex justify-between">
                    <p className="font-medium text-base">{book.category}</p>
                    <div className="flex items-center gap-1">
                        <p className="font-medium text-base">{book.rating}</p>
                        <CiStar className="text-2xl"></CiStar>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}