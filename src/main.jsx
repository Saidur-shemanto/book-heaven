import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './homepage/Home.jsx';
import HomePage from './homepage/HomePage.jsx';
import ListedBooks from './listed-books/ListedBooks.jsx';
import PagesToRead from './pages-to-read/PagesToRead.jsx';
import BookDetails from './booklist/BookDetails.jsx';
import Read from './listed-books/read/Read.jsx';
import WishList from './listed-books/wishList/WishList.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "listed-books",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: '/listed-books',
            element: <><Navigate to={'/listed-books/read'} /></>


          },
          {
            path: "read",
            index: true,
            element: <Read></Read>,
            loader: () => fetch("/data/books.json")

          },
          {
            path: "wishlist",
            element: <WishList></WishList>,
            loader: () => fetch("/data/books.json")

          },
        ],
      },
      {
        path: "pages-to-read",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("/data/books.json"),
      },
      {
        path: "books/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/data/books.json"),
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
