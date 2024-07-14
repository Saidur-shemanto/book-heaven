import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../AuthProvider";


const Login = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [toggle, setToggle] = useState(false)
    const { createUser, login, googleLogin } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const handleEmailPassLogin = data => {
        login(data.email, data.password)
            .then(res => {
                console.log(res)
                navigate(location.state ? location.state : '/')

            })

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => createUser(result))
            .catch(error => console.log(error))

    }
    return (

        <div className="card bg-front-door  w-full max-w-sm shrink-0 shadow-2xl mx-auto mb-48">
            <form className="card-body  bg-[rgba(255,255,255,0.8)]" onSubmit={handleSubmit(handleEmailPassLogin)}>
                <div className="form-control">
                    <label className="label font-bold">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email")} required />
                </div>
                <div className="form-control">
                    <label className="label font-bold">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="flex relative">
                        <input type={toggle ? 'text' : 'password'} name="password" placeholder="password" className="input w-full input-bordered" {...register("password")} required />
                        <p className="cursor-pointer absolute right-4 top-4" onClick={() => { setToggle(!toggle) }}>{toggle ? <FaRegEyeSlash /> : <FaRegEye />}</p>

                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>

                <p>Do not have an account? <Link to='/signup'><span className="text-purple-500 underline">Register</span></Link></p>
            </form>
        </div>


    )
};

export default Login;

