/** @format */
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import style from "./Auth.module.css";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { BeatLoader } from "react-spinners";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name == "signin") {
      //firebase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((useInfo) => {
          // console.log(useInfo);
          dispatch({
            type: Type.SET_USER,
            user: useInfo.user,
          });
          setLoading({ ...loading, signIn: false });
        })
        .catch((err) => {
          // console.log(err.message);
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((useInfo) => {
          setLoading({ ...loading, signUp: true });
          // console.log(useInfo);
          dispatch({
            type: Type.SET_USER,
            user: useInfo.user,
          });
          setLoading({ ...loading, signUp: false });
        })
        .catch((err) => {
          // console.log(err);
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };
  // console.log(password,email)
  return (
    <>
      <section className={style.login}>
        {/* logo */}
        <Link>
          <img
            src="https://en.wikichip.org/w/images/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>

        {/* form  */}
        <div className={style.login_container}>
          <h1>Sign-In</h1>
          <form action="">
            <div>
              <label htmlfor=""> Email </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              />
            </div>

            <div>
              <label htmlfor=""> password </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>
            <button
              type="submit"
              onClick={authHandler}
              name="sign In"
              className={style.login_signInButton}
            >
              {" "}
              {loading - signIn ? (
                <BeatLoader color="#000" size={15}></BeatLoader>
              ) : (
                "sign In"
              )}
              Sign In
            </button>
          </form>
          {/* agreement */}
          <p>
            By signing in, you agree to our Terms of Service and Privacy Policy.
            You consent to the collection and use of your data as outlined in
            our policies. You confirm that all information provided is accurate
            to the best of your knowledge.
          </p>
          {/* create account btn  */}
          <button
            type="submit"
            onClick={authHandler}
            name="Sign Up"
            className={style.login_registerButton}
          >
            create your Amazon Account
          </button>
          {error && (
            <small style={{ paddingTop: "5px", color: "red" }}>error</small>
          )}
        </div>
      </section>
    </>
  );
}

export default Auth;
