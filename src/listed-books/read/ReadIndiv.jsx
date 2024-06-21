import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
const ReadIndiv = ({ book }) => {
    return (
        <div className="flex gap-6 border rounded-2xl p-6">
            <div className="w-[12rem] h-[15rem] flex justify-center items-center bg-[#1313130D] rounded-2xl">
                <img className="w-[8rem] h-[12rem]" src={book.image} alt="" />
            </div>
            <div className="flex flex-col gap-4">
                <p>{book.bookName}</p>
                <p>by: {book.author}</p>
                <div className="flex">
                    <p>Tag</p>
                    <div className="flex">
                        {book.tags.map(id => <p className="bg-[#23BE0A0D] rounded-3xl text-[#23BE0A]">#{id}</p>)}
                    </div>
                    <div className="flex">
                        <CiLocationOn />
                        <p>Year of publishing: {book.yearOfPublishing}</p>

                    </div>
                </div>
                <div className="flex">
                    <div className="flex justify-center items-center">
                        <GoPeople />
                        <p>Publisher: {book.pubisher}</p>

                    </div>
                    <div className="flex justify-center items-center">
                        <IoDocumentTextOutline />
                        <p>Page {book.totalPages}</p>
                    </div>
                </div>
                <hr />
                <div className="flex">
                    <p className="rounded-full bg-[#328EFF26] text-[#328EFF] p-3">Category: {book.category}</p>
                    <p className="rounded-full bg-[#FFAC3326] text-[#FFAC33]  p-3">Ratings: {book.rating}</p>
                    <button className="rounded-full bg-[#23BE0A] text-white p-3">View Details</button>
                </div>
            </div>


        </div>
    )
};

export default ReadIndiv;
