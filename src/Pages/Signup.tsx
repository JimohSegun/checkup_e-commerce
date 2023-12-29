import React, { useState, useRef, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../style";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const reset = () => {
    if (form.current) {
      form.current.reset();
    }
  };

 const register = async () => {
   try {
     const result = await createUserWithEmailAndPassword(
       auth,
       registerEmail,
       registerPassword
     );
  

     // Reset the form if the form reference exists
     if (form.current) {
       reset();
       setRegisterEmail("");
       setRegisterPassword("");
     }

     if (result.user) {
       // Use optional chaining here
       form.current?.reset();
       toast.success("Account registered successfully", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
       });
     } else {
       toast.error("Failed to register account", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
       });
     }
   } catch (error) {
     setErrorMessage(error.message);
   }
 };
  const sendContact = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Call the register function
    await register();
  };

  return (
    <section className={`${styles.paddingX} ${styles.paddingY} flex flex-col `}>
      <h3 className={`${styles.heading3} mb-[30px] text-center`}>
        Register your account
      </h3>
      {errorMessage && (
        <p
          className={`${styles.paragraph} text-center mb-[20px] text-red-800 font-semibold`}
        >
          {errorMessage}
        </p>
      )}
      <form
        onSubmit={sendContact}
        ref={form}
        method="post"
        className="flex-1 flex flex-col justify-center items-center"
      >
        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          value={registerEmail}
          onChange={(event) => setRegisterEmail(event.target.value)}
          className="md:w-[900px] md:py-[18px] md:px-[5px] w-[350px] py-[10px] px-[3px]"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={registerPassword}
          onChange={(event) => setRegisterPassword(event.target.value)}
          className="my-[20px] md:w-[900px] w-[350px] py-[10px] px-[3px] md:py-[18px] md:px-[5px]"
        />
        <button
          type="button"
          className={` ${styles.paragraph} w-[350px] py-[15px] px-[3px] bg-orange-800 hover:bg-orange-300 hover:text-dimBlack text-white md:py-[20px] md:px-[5px] rounded md:w-[900px] text-center btn-disable`}
          onClick={register}
        >
          Sign up
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Login;
