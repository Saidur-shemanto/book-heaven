import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
const ReadIndiv = ({ book }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 border rounded-2xl p-6 items-center lg:items-start">
            <div className="w-[12rem] h-[15rem] flex justify-center items-center bg-[#1313130D] rounded-2xl">
                <img className="w-[8rem] h-[12rem]" src={book.image} alt="" />
            </div>
            <div className="flex flex-col gap-4">
                <p className="font-bold text-2xl">{book.bookName}</p>
                <p className="font-medium text-base">By: {book.author}</p>
                <div className="flex items-center gap-2">
                    <p className="font-bold text-base">Tag</p>
                    <div className="flex justify-center items-center">
                        {book.tags.map(id => <p key={id} className="bg-[#23BE0A0D] rounded-3xl text-[#23BE0A] p-1">#{id}</p>)}
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <CiLocationOn />
                        <p>Year of publishing: {book.yearOfPublishing}</p>

                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex justify-center items-center gap-1">
                        <GoPeople />
                        <p>Publisher: {book.publisher}</p>

                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <IoDocumentTextOutline />
                        <p>Page {book.totalPages}</p>
                    </div>
                </div>
                <hr />
                <div className="flex lg:flex-row flex-col items-center gap-3">
                    <p className="w-full lg:w-fit rounded-full bg-[#328EFF26] text-[#328EFF] p-3 text-center">Category: {book.category}</p>
                    <p className="w-full lg:w-fit rounded-full bg-[#FFAC3326] text-[#FFAC33]  p-3 text-center">Ratings: {book.rating}</p>
                    <a href=''><button className="rounded-full bg-[#23BE0A] text-white p-3">View Details</button></a>
                </div>
            </div>


        </div>
    )
};

export default ReadIndiv;
