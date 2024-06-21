const Author = ({ author }) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={author.authorPic} alt="Shoes" className="rounded-xl w-[18rem] h-[22rem]" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{author.authorName}</h2>

                <p><span className="font-medium ">Age: </span>{author.age}</p>
                <p><span className="font-medium ">Genre: </span>{author.authorGenre}</p>
                <p><span className="font-medium ">Total Books: </span>{author.totalNumberOfBooks}</p>


            </div>
        </div>
    )
};

export default Author;
