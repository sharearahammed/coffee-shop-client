import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import Header from "./Header";

const SignIn = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginUser = {email,password};
        console.log(loginUser);

        login(email,password)
        .then(result=>{
            console.log(result.user)
            const user ={
                email,
                lastLoggedAt: result.user?.metadata?.lastSignInTime
            }
            // update last logged  at in this database 
            fetch('https://coffe-store-server-ruddy.vercel.app/user',{
                method: 'PATCH',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div>
          <Header></Header>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;