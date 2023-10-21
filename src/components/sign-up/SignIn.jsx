import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsMeta, BsLinkedin } from "react-icons/bs";

const SignIn = () => {
  return (
    <>
      <div className="bg-[#7367F0] flex justify-center h-screen">
        <div className="flex justify-center  items-center  gap-4 w-auto">
          <div className="flex flex-col justify-start items-start bg-white p-7   gap-5 rounded-lg ">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl">Sign In</h1>
              <span className="text-lg">
                New user?
                <Link href={""} className="text-[#7367F0]">
                  Create an account{" "}
                </Link>
              </span>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col">
                <label
                  for="input-group-1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Address
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <label
                    for="small-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative mb-6">
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button className="bg-[#7367F0] text-lg py-2 rounded-lg">
                  Sign In
                </button>
                <Link href={""} className="text-red-600 text-center">
                  Forgot password?
                </Link>
              </div>
              <div className="flex items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <div className="px-4">or Just Sign in using</div>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
            </div>
            <div className="flex  lg:flex-wrap  justify-center gap-4 ">
              <button className="flex justify-center items-center gap-2 w-36 h-12 border-2">
                <FcGoogle />
                Google
              </button>
              <button className="flex justify-center items-center gap-2 w-36 h-12 border-2">
                <BsMeta />
                BsMeta
              </button>

              <button className="flex justify-center items-center gap-2 w-36 h-12 border-2">
                <BsLinkedin />
                Linkedin
              </button>
              <button className="flex justify-center items-center gap-2 w-36 h-12 border-2">
                <BsLinkedin />
                microsoft
              </button>
            </div>
            <span>
              Protected by reCAPTCHA and subject to the ePosting Privacy Policy
              and Terms of Service.
            </span>
          </div>
         
            <Image
              src="/signin.png"
              alt="signIn"
              width={550}
              height={550}
            />
          
        </div>
      </div>
    </>
  );
};

export default SignIn;
