import { useRef, useState } from "react"
import app from "../utils/firebase";
import { DUMMY_URL, NETFLIX_HOME_SCREEN_IMAGE } from "../constants/Images"
import { validateEmailAndPassword } from "../utils/validate";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {useDispatch,} from 'react-redux'
import { addUser } from "../utils/Slices/userSlice";
const Login=()=>
{
    const [SignInUp,setSignInUp]=useState(true)
    const [errorMessage,setErrorMessage]=useState(null);

    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const dispatch=useDispatch();

    const handleFormSubmit=()=>
    {
        // const username=name.current.value;
        const passwordValue=password.current.value;
        const emailAddress=email.current.value;

        const validateOutput=validateEmailAndPassword(emailAddress,passwordValue)
        setErrorMessage(validateOutput)

        if (validateOutput ) return ;

        if (!SignInUp)
        {
            const auth = getAuth(app);
            createUserWithEmailAndPassword(auth, emailAddress, passwordValue)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: name.current.value, photoURL: DUMMY_URL
                  }).then(() => {
                    // Profile updated!
                    const {uid,displayName,photoURL,email} = auth.currentUser;
                    dispatch(addUser({uid:uid,displayName:displayName ,photoURL:photoURL,email:email}))
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
                // ..
              });
        }
        else{
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
                setErrorMessage(errorMessage)
              });
        }


    }
    return (
        <>
<           div>
                <div >
                     <img src={NETFLIX_HOME_SCREEN_IMAGE} alt="bg-img" className="h-screen w-full object-cover"/>
                </div>
                <div className="absolute h-auto w-3/12 top-52 left-[450px] bg-black bg-opacity-75">
                    <form className="flex flex-col m-6 " onSubmit={(e)=>e.preventDefault()}>
                        <p className="my-3 text-white text-3xl font-semibold "> { SignInUp ?"Sign In":"Sign Up"}</p>

                        <input ref={email} className="my-3 p-3 text-white bg-black bg-opacity-75 border border-gray-400" placeholder="Email or mobile number "/>

                        {!SignInUp && <input ref={name} className="my-3 p-3  bg-black bg-opacity-75 border text-white border-gray-400" placeholder="Enter full name "/> }

                        <input ref={password} className="my-3 p-3 text-white bg-black bg-opacity-75 border  border-gray-400" placeholder=" Password "/>

                        {errorMessage &&  <p className="text-red-500 ">{errorMessage}</p>}
                        <button onClick={handleFormSubmit} className="rounded-lg my-3 bg-red-600 p-3 text-white" >{ SignInUp ?"Sign In":"Sign Up"}</button>

                    <p className="my-1 text-white cursor-pointer" onClick={()=>setSignInUp(SignInUp ?false :true)}> { SignInUp ? "New to Netflix? Sign up now" : "Already registered ? sign in"}</p>
                
                    </form>
                </div>

            </div>
        </>
    )
}
export default Login