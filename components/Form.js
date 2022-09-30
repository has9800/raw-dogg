import { useState } from "react";
import { signInUser, signUserOut, signUpUser } from "../lib/firebaseHandler";
// import { useFirebase } from "@/context/FirebaseContext";
// import styles from "./form.module.scss";

import { useRouter } from "next/router";
// import { LockClosedIcon } from "@heroicons/react/20/solid";
// import { IoLaptopSharp } from "react-icons/io5";

function Form({ formText, type, ...args }) {
  //   const { signInUser, signUpUser } = useFirebase();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleForm = (e) => {
    e.preventDefault();

    switch (type) {
      case "Signup":
        signUpUser(name, email, password);

        setEmail("");
        setUsername("");
        setPassword("");

        router.push("/");
        break;
      case "Login":
        signInUser(email, password);

        setEmail("");
        setUsername("");
        setPassword("");

        router.push("/");
        break;

      default:
        console.log("cannot complete request");
        break;
    }
  };

  return (
    <div
      className={`flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-[#EAEAEA]`}
    >
      <div className="w-full max-w-md space-y-8 bg-[#333] p-5 rounded-md">
        <div>
          <div className="flex flex-row items-center justify-center">
            {/* <IoLaptopSharp size={37} className="text-black" /> */}
            <h1 className="ml-[6px] text-xl ff-primary">RawDogg</h1>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tightQ">
            {type}
          </h2>
          {type === "Signup" ? (
            <p className="mt-2 text-center text-sm">
              Or{" "}
              <a href="#" className="font-medium">
                start your 14-day free trial
              </a>
            </p>
          ) : null}
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={handleForm}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-900 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-gray-300 sm:text-sm"
                required
                autoComplete="email"
              />
            </div>
            {type === "Signup" && (
              <div className="flex flex-row items-center">
                <div className="w-full">
                  <label htmlFor="first-name" className="sr-only">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-900 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-gray-300 sm:text-sm"
                    required
                  />
                </div>
              </div>
            )}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-900 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-gray-300 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              onClick={handleForm}
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className={`h-5 w-5 text-yellow-200 group-hover:text-yellow-300`}
                  aria-hidden="true"
                />
              </span> */}
              {type}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
