import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsMeta, BsLinkedin } from "react-icons/bs";
const SocialButton = () => {
  return (
    <>
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
    </>
  );
};

export default SocialButton;
