import Home from '../homepage/Home.jsx';
import HomePage from '../homepage/HomePage.jsx';
import ListedBooks from '../listed-books/ListedBooks.jsx';
import PagesToRead from '../pages-to-read/PagesToRead.jsx';
import BookDetails from '../booklist/BookDetails.jsx';
import Read from '../listed-books/read/Read.jsx';
import WishList from '../listed-books/wishList/WishList.jsx';
import ErrorHandle from '../error/ErrorHandle.jsx';
import Authors from '../authors/Authors.jsx';
import Ratings from '../ratings/Ratings.jsx';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Register from '../authentication/register/Register.jsx';
import Login from '../authentication/login/Login.jsx';
import PrivateRoutes from './PrivateRoutes.jsx';
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage></HomePage>,
        errorElement: <ErrorHandle></ErrorHandle>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "listed-books",
                element: <PrivateRoutes><ListedBooks></ListedBooks></PrivateRoutes>,
                children: [
                    {
                        path: '/listed-books',
                        element: <PrivateRoutes><Navigate to={'/listed-books/read'} /></PrivateRoutes>


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
                element: <PrivateRoutes><PagesToRead></PagesToRead></PrivateRoutes>,
                loader: () => fetch("/data/books.json"),
            },
            {
                path: "books/:bookId",
                element: <PrivateRoutes><BookDetails></BookDetails></PrivateRoutes>,
                loader: () => fetch("/data/books.json"),
            },
            {
                path: "authors",
                element: <Authors></Authors>,
            },
            {
                path: "ratings",
                element: <Ratings></Ratings>,
                loader: () => fetch("/data/books.json"),
            },
            {
                path: "signup",
                element: <Register></Register>
            },
            {
                path: "login",
                element: <Login></Login>
            }

        ],
    },
]);
export default router;
