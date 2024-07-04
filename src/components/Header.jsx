import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser, addUser } from "../store/usersSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonLabel, setButtonLabel] = useState("Personalised suggestions");
  const currentUserExists = auth?.currentUser;
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        window.location.pathname === "/"
          ? navigate("/browse")
          : navigate(`${window.location.pathname}`);
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    if (location.pathname === "/search") setButtonLabel("Back to browse");
    return () => unsubscribe();
  }, []);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error, "sign out error");
      });
  };

  const routeToGptScreen = () => {
    if (location.pathname === "/search") {
      navigate("/browse");
    } else {
      navigate("/search");
    }
  };

  return (
    <div className="absolute w-screen px-8 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 cursor-pointer"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        onClick={() => {
          navigate("/browse");
        }}
      />

      {currentUserExists && (
        <div className="flex p-8 w-1.5/5">
          <button
            className=" mx-3  bg-purple-500  text-white rounded-md w-52"
            onClick={routeToGptScreen}
          >
            {buttonLabel}
          </button>
          <button
            className=" mx-3  bg-red-600  text-white rounded-md w-28"
            onClick={signOutUser}
          >
            Sign out
          </button>
          <img
            className="w-9 h-9 mx-3 "
            src="https://occ-0-4209-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABSLtJu5FuInfurhiIngaVEwoB9iZUzF_e3ozJMPYOCJciUXDKO-GctpasbdpXaQkpuhTOX788SZYsqNlc7SPE3mpAyyIPB0.png?r=d99"
            alt="userIcon"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
