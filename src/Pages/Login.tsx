import React, { useState, useRef, FormEvent } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import styles from "../style";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";


export function loader({ request }: { request: Request }) {
  return new URL(request.url).searchParams.get("message");
}


const Login = () => {
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const message: string | null = useLoaderData() as string | null;
  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate(); 

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
       
      const pathname =
        new URL(window.location.href).searchParams.get("redirect") || "/product/shoe";
       localStorage.setItem("loggedin", String(true));
      navigate(pathname);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const sendContact = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await loginUser();
  };

  return (
    <section className={`${styles.paddingX} ${styles.paddingY} flex flex-col`}>
      <h3 className={`${styles.heading3} mb-[30px] text-center`}>
        Login to your account
      </h3>
      {message && (
        <p
          className={`${styles.paragraph} text-center mb-[16px] text-red-800 font-semibold`}
        >
          {message}
        </p>
      )}
      {errorMessage && (
        <p
          className={`${styles.paragraph}text-center mb-[16px] text-red-800 font-semibold`}
        >
          {errorMessage}
        </p>
      )}
      <form
        ref={form}
        onSubmit={sendContact}
        method="post"
        className="flex-1 flex flex-col justify-center items-center"
      >
        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          value={loginEmail}
          onChange={(event) => setLoginEmail(event.target.value)}
          className="md:w-[900px] md:py-[18px] md:px-[5px] w-[350px] py-[10px] px-[3px]"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={loginPassword}
          onChange={(event) => setLoginPassword(event.target.value)}
          className="my-[20px] md:w-[900px] w-[350px] py-[10px] px-[3px] md:py-[18px] md:px-[5px]"
        />
        <button
          className={` ${styles.paragraph} w-[350px] py-[15px] px-[3px] bg-orange-800 hover:bg-orange-300 hover:text-dimBlack text-white md:py-[20px] md:px-[5px] rounded md:w-[900px] text-center btn-disable`}
          onClick={loginUser}
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
