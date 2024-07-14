import { useContext } from "react";
import { AuthContext } from "../authentication/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    if (user) {
        console.log(user)
        return children
    }
    return <Navigate to='/login'></Navigate>



};

export default PrivateRoutes;
