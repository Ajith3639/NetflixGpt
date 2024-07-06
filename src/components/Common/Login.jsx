import Header from "./Header";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { NETFLIX_BACKGROUND_IMAGE_URL } from "../../utilities/CONSTANTS";
import { auth } from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/usersSlice";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const [loginError, setLoginError] = useState(false);
  const togglesSignUp = () => {
    setSignUp(!signUp);
  };

  const { errors } = formState;

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    if (!errors.length) {
      if (signUp) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
          );
          const user = userCredential.user;

          await updateProfile(auth.currentUser, {
            displayName: data.name,
          });

          const { uid, email, displayName } = user;
          dispatch(addUser({ uid, email, displayName }));
        } catch (error) {
          console.error(error);
        }
      } else {
        signInWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch(() => {
            setLoginError(true);
          });
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img src={NETFLIX_BACKGROUND_IMAGE_URL} alt="background" />
      </div>
      <div className="absolute w-3/12 bg-black  mx-auto left-0 right-0 my-36 bg-opacity-90 rounded-md">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="p-16  pb-20 pl-18  pr-20"
          noValidate
        >
          {loginError && (
            <div className="p-2 mb-4 bg-red-700 text-white rounded	">
              The account credentials is invalid
            </div>
          )}
          <h1 className="text-3xl font-bold mt-1 mb-5 text-white">
            {signUp ? "Sign up" : "Sign in"}
          </h1>
          {signUp ? (
            <div>
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 my-2 rounded-md w-full  bg-gray-200"
                  {...register("name", {
                    required: "Username is required",
                    minLength: {
                      value: 1,
                      message: "Username should be atleast 1 character1",
                    },
                  })}
                />
                <span className="text-sm text-red-500">
                  {errors?.name?.message}{" "}
                </span>
              </div>

              <input
                type="text"
                placeholder="Phone"
                className="p-3 my-2 rounded-md w-full  bg-gray-200"
                {...register("phone")}
              />
            </div>
          ) : null}
          <div>
            {" "}
            <input
              type="email"
              placeholder="Email"
              className="p-3 my-2 rounded-md w-full bg-gray-200"
              {...register("email", {
                required: "Email is required",
                minLength: {
                  value: 1,
                  message: "Email should be atleast 1 character1",
                },
                pattern: {
                  value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <span className="text-sm text-red-500">
              {errors?.email?.message}{" "}
            </span>
          </div>
          <div>
            {" "}
            <input
              type="password"
              placeholder="Password"
              className="p-3 my-2 rounded-md w-full  bg-gray-200"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 1,
                  message: "Password should be atleast 1 character1",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "Password should contain atleast 8 characters, 1 letter and 1 number",
                },
              })}
            />
            <span className="text-sm text-red-500">
              {errors?.password?.message}{" "}
            </span>
          </div>

          <button
            type="submit"
            className="p-3 mx-auto mt-8 bg-red-600  text-white rounded-md w-full"
          >
            {signUp ? "Sign up" : "Sign in"}
          </button>

          {!signUp && (
            <p className="text-gray-500 block pt-10 ">
              New to Netflix?{" "}
              <span
                className="text-white cursor-pointer"
                onClick={togglesSignUp}
              >
                Sign up now.
              </span>{" "}
            </p>
          )}
          {signUp && (
            <p className="text-gray-500 block pt-10 ">
              Already a user?{" "}
              <span
                className="text-white cursor-pointer"
                onClick={togglesSignUp}
              >
                Sign in.
              </span>{" "}
            </p>
          )}
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};
export default Login;
