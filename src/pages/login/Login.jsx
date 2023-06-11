import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../shared/socialLogin/SocialLogin";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User logged in',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold text-center mb-4">Login now!</h1>
                    <img className="rounded-xl" src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1686376397~exp=1686376997~hmac=629dcab8fc592955ff97787bc691cbe14f31d17097fa4c66578f8d3f34839889" alt="" />
                </div>
                <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">

                            </label>



                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-red-500" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="text-center">New here? <span className="text-red-500"><Link to='/signUp'>Create an account</Link></span></p>

                    <div className="mb-6">
                       
                        <SocialLogin></SocialLogin>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;