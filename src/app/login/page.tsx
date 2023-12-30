"use client";

import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoginModal from "@/components/LoginModal";
import { FaExclamationCircle } from "react-icons/fa";

export default function LogIn() {
  const inputClasses =
    "text-[14px] sm:text-base lg:text-[20px] font-medium h-[50px] p-[10px] border-[1px] mt-[8px] w-full sm:h-[60px] shadow-xl outline-none rounded-[5px]";
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttondisabled, setButtonDisabled] = React.useState(true);

  const [loading, setLoading] = React.useState(false);

  const [error, setError] = React.useState(false);

  const [emptyField, setEmptyField] = React.useState(false);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
      setEmptyField(false);
    } 
    if (error === true) {
      setEmptyField(false)
    }
  }, [user, error]);

  const checkButtonState = async () => {
    if (!buttondisabled) {
      const onLogin = async () => {
        try {
          setLoading(true);
          const res = await axios.post("/api/users/login", user);
          console.log("Login Successful", res.data);
          router.push("/");
        } catch (error: any) {
          setError(true);
          console.log(error.message);
        } finally {
          setLoading(false);
        }
      };
      onLogin();
    } else if (buttondisabled) {
      setEmptyField(true);
      setError(false);
    }
  };

  return (
    <LoginModal>
      <div className="sm:w-[400px] sm:flex flex-col justify-center text-black my-[40px] mx-[20px] sm:mx-auto font-Poppins">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[20px] font-medium">Log In</p>
            <p className="text-[12px] text-red-700">
               Log in to continue
            </p>
          </div>
          <div className="w-[25px] sm:w-[40px] h-[25px] sm:h-[40px] flex items-center justify-center border shadow-myBoxShadow bg-[#fff] rounded-full text-red-700">
            <Link href="/">
              <i className="fa fa-times text-[16px] md:text-[24px] font-extralight"></i>
            </Link>
          </div>
        </div>

        <div>
          <div className="mt-[20px]">
            <input
              type="email"
              placeholder="Email"
              className={inputClasses}
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
            />
          </div>

          <div className="mt-[20px]">
            <input
              type="password"
              placeholder="Password"
              className={inputClasses}
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <div className="mt-[10px]">
            <button
              className="text-[14px]"
              onClick={() => {
                alert("I know you ain't forgot shit!");
              }}
            >
              Forgot password?
            </button>
          </div>

          
          {error && (
            <div className="mt-[10px] flex items-center gap-2 font-medium text-red-500">
              <p className="text-sm">Phone Number or password incorrect</p>
              <FaExclamationCircle />
            </div>
          )}

          {emptyField && (
            <div className="mt-[10px] flex items-center gap-2 font-medium text-red-500">
              <p className="text-sm">Fields can not be empty</p>
              <FaExclamationCircle />
            </div>
          )}


          <div className={`${error || emptyField ? "mt-0" : "mt-[20px]"}`}>
            <button
              className="text-base font-semibold text-white w-full sm:w-full lg:w-full h-[50px] sm:h-[60px] flex items-center justify-center  rounded-[6px] sm:mx-auto bg-red-700 hover:bg-red-900"
              onClick={() => checkButtonState()}
            >
              Login
            </button>
          </div>

          <div className="mt-[20px]">
            <p className="text-[14px]">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-red-700 font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </LoginModal>
  );
}