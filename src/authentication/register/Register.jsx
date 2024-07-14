import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = (props) => {
    const navigate = useNavigate()
    const { createUser } = useContext(AuthContext)
    const [passError, setPassError] = useState('')
    const [toggle, setToggle] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        if (data.password.length < 6) {
            setPassError("Password must be at least 6 characters")
            return
        } else if (!/[A-Z]/.test(data.password)) {
            setPassError("Password must have an uppercase character")
            return

        }
        else if (!/[a-z]/.test(data.password)) {
            setPassError("Password must have a lowercase character")
            return

        }
        createUser(data.email, data.password)
            .then(user => {
                updateProfile(user.user, {
                    displayName: data.name, photoURL: data.image
                })

            })
        navigate('/login')




    };
    return (
        <div className="card bg-front-door max-w-lg shrink-0 shadow-2xl mx-auto mb-[100px]">
            <form className="card-body w-full bg-[rgba(255,255,255,0.8)]" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label font-bold">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" {...register("name")} required />
                </div>
                <div className="form-control">
                    <label className="label font-bold">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" placeholder="Image" name="image" className="input input-bordered" {...register("image")} required />
                </div>
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




                    {passError ? <p className="text-red-600">{passError}</p> : <p className="hidden"></p>}
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <p className="font-semibold">Already have an account? <Link to='/login'><span className="text-purple-500 underline">Login</span></Link></p>
            </form>

        </div>
    )
};

export default Register;
