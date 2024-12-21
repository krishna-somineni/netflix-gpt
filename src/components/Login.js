import { useRef, useState } from "react";
import app from "../utils/firebase";
import { DUMMY_URL, NETFLIX_HOME_SCREEN_IMAGE } from "../constants/Images";
import { validateEmailAndPassword } from "../utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/Slices/userSlice";
const Login = () => {
  const [SignInUp, setSignInUp] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    // const username=name.current.value;
    const passwordValue = password.current.value;
    const emailAddress = email.current.value;

    const validateOutput = validateEmailAndPassword(
      emailAddress,
      passwordValue
    );
    setErrorMessage(validateOutput);

    if (validateOutput) return;

    if (!SignInUp) {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, emailAddress, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: DUMMY_URL,
          })
            .then(() => {
              // Profile updated!
              const { uid, displayName, photoURL, email } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  photoURL: photoURL,
                  email: email,
                })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, emailAddress, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <>
      <div className="relative h-screen w-screen">
        {/* Background Image */}
        <img
          src={NETFLIX_HOME_SCREEN_IMAGE}
          alt="bg-img"
          className="h-screen w-full object-cover"
        />

        {/* Form Container */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
               w-screen sm:w-3/12 bg-black bg-opacity-75 rounded-lg p-6"
        >
          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            {/* Form Heading */}
            <p className="mb-4 text-white text-2xl sm:text-3xl font-semibold text-center">
              {SignInUp ? "Sign In" : "Sign Up"}
            </p>

            {/* Input Fields */}
            <input
              ref={email}
              type="text"
              className="mb-4 p-3 text-white bg-black bg-opacity-75 border border-gray-400 rounded-md w-full"
              placeholder="Email or mobile number"
            />

            {!SignInUp && (
              <input
                ref={name}
                type="text"
                className="mb-4 p-3 bg-black bg-opacity-75 border text-white border-gray-400 rounded-md w-full"
                placeholder="Enter full name"
              />
            )}

            <input
              ref={password}
              type="password"
              className="mb-4 p-3 text-white bg-black bg-opacity-75 border border-gray-400 rounded-md w-full"
              placeholder="Password"
            />

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}

            {/* Submit Button */}
            <button
              onClick={handleFormSubmit}
              className="rounded-lg mb-4 bg-red-600 p-3 text-white w-full"
            >
              {SignInUp ? "Sign In" : "Sign Up"}
            </button>

            {/* Toggle Sign-In/Sign-Up */}
            <p
              className="text-white text-center cursor-pointer"
              onClick={() => setSignInUp(!SignInUp)}
            >
              {SignInUp
                ? "New to Netflix? Sign up now"
                : "Already registered? Sign in"}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
