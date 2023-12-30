"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoginModal from "@/components/LoginModal";

export default function SignupPage() {
  const router = useRouter();

  const inputClasses= "text-[14px] sm:text-base lg:text-[20px] font-medium h-[50px] p-[10px] border-[1px] mt-[8px] w-full sm:h-[60px] shadow-xl outline-none rounded-[5px]"

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttondisabled, setButtonDisabled] = useState(true);

  const [loading, setLoading] = useState(false);

  const checkBeforeSignup = async () => {
    if (!buttondisabled) {
      const onSignup = async () => {
        try {
          setLoading(true);
          const res = await axios.post("/api/users/signup", user);
          console.log("Signup successful", res.data);
          router.push("/login");
    
        } catch (error: any) {
            console.log(`Signup failed\n${error.message}`)
        } finally {
          setLoading(false);
        }
      };
      onSignup()
    }
  }

  React.useEffect(() => {
    if(user.username.length > 0 && user.email.length > 0 && user.password.length > 0 ) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <LoginModal>
      <div className="sm:w-[400px] sm:flex flex-col justify-center  my-[40px] mx-[20px] sm:mx-auto font-Poppins">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[20px] font-medium">{loading ? "Signing up" : "Sign Up"}</p>
            <p className="text-[12px] text-red-700">
              Sign Up to continue
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
             type="text"
             placeholder="Username"
             className={inputClasses}
             value={user.username}
             onChange={(e) => setUser({...user, username: e.target.value})}
            />
          </div>

          {/* <div className="mt-[20px]">
            <input 
             type="tel"
             placeholder="Phone Number"
             className={inputClasses}
             value={user.phonenumber}
             onChange={(e) => setUser({...user, phonenumber: e.target.value})}
            />
          </div> */}

          <div className="mt-[20px]">
            <input type="email"
             placeholder="Email"
             className={inputClasses}
             value={user.email}
             onChange={(e) => setUser({...user, email: e.target.value})}
            />
          </div>

          <div className="mt-[20px]">
            <input 
             type="text"
             placeholder="password"
             className={inputClasses}
             value={user.password}
             onChange={(e) => setUser({...user, password: e.target.value})}
            />
          </div>

          <div className="mt-[20px]">
            <button 
                className="text-base font-semibold text-white w-full sm:w-full lg:w-full h-[50px] sm:h-[60px] flex items-center justify-center  rounded-[6px] sm:mx-auto bg-red-700 hover:bg-yellow-500`"
                onClick={() => checkBeforeSignup()}
                >
              Sign Up
            </button>
          </div>
          <div className="mt-[20px]">
            <p className="text-[14px]">
              Already have an account?{" "}
              <Link href="/login"
                className="text-red-700 font-semibold"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </LoginModal>
  );
}
