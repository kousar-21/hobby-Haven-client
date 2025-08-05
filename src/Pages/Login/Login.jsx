import React, { use } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthContext';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Login = () => {

    const { signInUser, googleSignIn } = use(AuthContext)
    const navigate = useNavigate()
    const location  = useLocation();
    // console.log(location)



    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)

        const email = formData.get('email')
        const password = formData.get('password')
        // console.log(email, password)



        if (password.length < 6) {
            toast.error("Password length must be at least 6 character !!")
            return
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Must have a Lowercase letter in the password")
            return
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Must have an Uppercase letter in the password")
            return
        }



        // email sign in
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Congratulation! Your Login completed",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    navigate(`${location.state ? location.state : '/' }`)
                }, 2000);
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Please Check Your Email or Password is Okay !!")
                return
            })
        form.reset()
    }


    //google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Congratulation! Your Login completed",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    navigate(`${location.state ? location.state : '/' }`)
                }, 1500);
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Please Check Your Email or Password is Okay !!")
                return
            })
    }





    return (
        <div className='flex justify-center py-10 w-full'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                <div className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleLogin}>
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label pt-2">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <input className="btn btn-neutral mt-4 w-full" type="submit" value="Login" />

                        <div className='py-5'>Or,</div>


                    </form>

                    {/* Google */}
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] mb-3 w-full">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    <div><h3>Don't have an account? Please <NavLink to='/register'><span className='text-blue-400'>register</span></NavLink></h3></div>
                </div>
            </div>
        </div>

    );
};

export default Login;