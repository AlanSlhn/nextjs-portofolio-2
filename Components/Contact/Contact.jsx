import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen gap-5 bg-black p-20 " id="contact">
      <div className="flex flex-col items-center gap-3 justify-between ">
        <div className="text-white text-2xl">
          <h1>Contact Me</h1>
        </div>
        <div className="w-2/5 rounded-xl flex flex-col items-center gap-5 p-20 bg-white/10 max-lg:w-full">
          <div className="flex flex-col gap-3">
            <label htmlFor="text" className="text-white">
              Your Name
            </label>
            <input type="text" className="w-72 h-7 rounded-xl max-sm:w-60 " />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="text" className="text-white">
              Your Email
            </label>
            <input type="email" className="w-72 h-7 rounded-xl max-sm:w-60 " />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="text" className="text-white">
              Give Me Comment
            </label>
            <textarea type="email" className="w-72 h-56 rounded-xl max-sm:w-60 " />
          </div>
          <div className="">
            <button className="w-48 h-7 rounded-xl text-white bg-slate-500">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
