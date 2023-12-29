"use client";

import React from "react";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const inputClasses =
     "mt-[1px] text-[14px] sm:text-base lg:text-[20px] font-medium h-[50px] p-[10px] border-[1px] mt-[0px] w-full sm:h-[60px] shadow-xl outline-none rounded-[5px]";

  const [data, setData] = React.useState({
    server: "",
    portnumber: "",
    username: "",
    password: "",
    subject: "",
    mailcontent: "",
    recipient: "",
  });

  const [buttondisabled, setButtonDisabled] = React.useState(true);

  const [loading, setLoading] = React.useState(false);

  const onSend = async () => {
    try {
      await axios.post("/api/users/sendmail", data);
    } catch (error: any) {
      console.log(`sending failed\n${error.message}`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col gap-8 items-center justify-center p-6 bg-slate-900">
      <div className="flex flex-col gap-4 bg-zinc-300 p-8 rounded-3xl">

        <div className="flex gap-2 md:gap-8">
          <div className="">
            <label htmlFor="server" className="text-xs font-medium text-zinc-600">
              SMTP server
            </label>
            <input
              id="server"
              className={inputClasses}
              type="email"
              value={data.server}
              placeholder="smtp server"
              onChange={(e) => setData({ ...data, server: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="portnumber" className="text-xs font-medium text-zinc-600">
              Port Number
            </label>
            <input
              id="portnumber"
              className={inputClasses}
              type="number"
              value={data.portnumber}
              placeholder="port"
              onChange={(e) => setData({ ...data, portnumber: e.target.value })}
            />
          </div>
        </div>

        <div className="flex gap-2 md:gap-8">
          <div>
            <label htmlFor="username" className="text-xs font-medium text-zinc-600">
              Username
            </label>
            <input
              id="username"
              className={inputClasses}
              type="text"
              value={data.username}
              placeholder="username"
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="password" className="text-xs font-medium text-zinc-600">
              Password
            </label>
            <input
              id="password"
              className={inputClasses}
              type="password"
              value={data.password}
              placeholder="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
        </div>

        <div>
            <label htmlFor="subject" className="text-sm font-medium text-zinc-600">
              Email Subject
            </label>
            <input
              id="subject"
              className={inputClasses}
              type="text"
              value={data.subject}
              placeholder="Subject"
              onChange={(e) => setData({ ...data, subject: e.target.value })}
            />
        </div>

        <div>
            <label htmlFor="mailcontent" className="text-sm font-medium text-zinc-600">
              Email Text
            </label>
            <textarea
              id="mailcontent"
              className={`h-28 overflow-x-hidden ${inputClasses}`}
              value={data.mailcontent}
              placeholder="Enter Your Message"
              onChange={(e) => setData({ ...data, mailcontent: e.target.value })}
            />
        </div>

        <div>
            <label htmlFor="mailcontent" className="text-sm font-medium text-zinc-600">
              Recipient
            </label>
            <input
              id="recipient"
              className={inputClasses}
              type="text"
              value={data.recipient}
              placeholder="Enter Recipient Email"
              onChange={(e) => setData({ ...data, recipient: e.target.value })}
            />
          </div>

        <button
          className="text-[20px] text-center font-bold px-4 py-2 mt-4 bg-red-900 text-white rounded-md hover:text-zinc-400"
          onClick={() => onSend()}
        >
          Send
        </button>
      </div>
    </main>
  );
}
