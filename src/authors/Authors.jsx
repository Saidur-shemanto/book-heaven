import { useEffect, useState } from "react";
import Author from "./Author";

const Authors = () => {
    const [authors, setAuthors] = useState([])
    useEffect(() => {
        fetch('/data/authors.json')
            .then(res => res.json())
            .then(data => setAuthors(data))
    }, [])
    return (
        <div className="grid  grid-cols-3 gap-4">
            {authors.map(author => <Author key={author.id} author={author}></Author>)}

        </div>
    )
};

export default Authors;
