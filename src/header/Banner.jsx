export default function Banner() {
    return (
        <div className="hero bg-base-200 container mx-auto rounded-3xl py-20 mt-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/media/bannerimg.png" className="max-w-sm max-h-96 rounded-lg " />
                <div className="flex flex-col gap-12">
                    <h1 className="text-6xl font-bold w-2/3">Books to freshen up your bookshelf</h1>

                    <a href="/listed-books/read"><button className="bg-[#23BE0A] text-white text-xl font-bold p-7 rounded-lg w-48">View The List</button></a>
                </div>
            </div>
        </div>
    )
}