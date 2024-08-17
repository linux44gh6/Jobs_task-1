import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const {logIn,logInWithGoogle}=useContext(AuthContext)
const navigate=useNavigate()
  const handleToLogIn=(e)=>{
    e.preventDefault()
    const email=e.target.elements.email.value
    const password=e.target.elements.password.value
    console.log(email,password);
    logIn(email,password)
    .then(()=>{
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
    })
  }
  const  handleToGoogleLogin=()=>{
    logInWithGoogle()
    .then(()=>{
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Log In with google success",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
    })
  }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <form className="w-[400px] p-10" onSubmit={handleToLogIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-600 text-white">Login</button>
        </div>
        <div className="divider">OR</div>
        <button onClick={handleToGoogleLogin} className="btn bg-blue-600 w-full text-white hover:bg-blue-600">Google Login</button>
        <NavLink to={'/register'}>
      <p>New here? please <span className="underline text-blue-600  font-semibold">sign Up</span></p>
      </NavLink>
      </form>
     
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;