import { Link } from "react-router-dom";

const ErrorHandle = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] gap-2">
            <p className="text-4xl font-bold">404 route/not found page.</p>
            <Link className="bg-[#23BE0A] rounded-3xl p-3 text-white text-2xl font-medium" to="/">Go back</Link>
        </div>
    )
};

export default ErrorHandle;
