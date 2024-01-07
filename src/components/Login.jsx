import Header from "./Header";
import { useState } from "react";
const Login = () => {
    const [signUp, setSignUp] = useState(false); 
    const togglesSignUp = () => {
        setSignUp(!signUp);
    }
    return (
        <div >
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background"
                />
            </div>
            <div className="absolute w-3/12 bg-black  mx-auto left-0 right-0 my-36 bg-opacity-90 rounded-md">
                <form action="" className="p-16  pb-20 pl-18  pr-20">
                    <h1 className="text-3xl font-bold mt-1 mb-5 text-white">{signUp?"Sign up":"Sign in"}</h1>
                  {signUp?  <div>  <input type="text" placeholder="Name" className="p-3 my-2 rounded-md w-full bg-gray-200" />
                    <input type="password" placeholder="Phone" className="p-3 my-2 rounded-md w-full  bg-gray-200" /></div>:null}
                  
                    <input type="text" placeholder="Email" className="p-3 my-2 rounded-md w-full bg-gray-200" />
                    <input type="password" placeholder="Password" className="p-3 my-2 rounded-md w-full  bg-gray-200" />
                    <button type="submit" className="p-3 mx-auto mt-8 bg-red-600  text-white rounded-md w-full">{signUp?"Sign up":"Sign in"}</button>
                    <span className="text-gray-500 text-sm block ml-[220px] mt-2">Forgot password?</span>
                    {!signUp&&<p className="text-gray-500 block pt-10 ">New to Netflix? <span className="text-white cursor-pointer" onClick={togglesSignUp}>Sign up now.</span> </p>}
                    {signUp&&<p className="text-gray-500 block pt-10 ">Already a user? <span className="text-white cursor-pointer" onClick={togglesSignUp}>Sign in.</span> </p>}

            </form>
            </div>          
             

        </div>
    );
}
export default Login;