import React from "react";

const Modal = () => {
  return (
    <div className="fixed z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] max-w-[1100px] h-[700px]  shadow-2xl rounded-[20px] overflow-hidden">
      <div className="flex">
        <div className="w-[50%] bg-[#f5f5f5] ">
          <div className=" flex flex-col items-center px-4 mt-20 justify-center gap-3">
            <h3 className="text-[26px] font-bold">Here's a bit about me.</h3>
            <h4>Frontend Software Engineer</h4>
            <p>
              I'm a 20 year-old Indonesian frontend software engineer with a
              strong passion for developing websites with great user
              experiences.
              <br /> Right now I am looking for a job in the field of front-end
              engineering.
            </p>
          </div>
        </div>
        <div className="w-[50%] h-[100vh] bg-gray-800 text-white   ">
          <div className="flex flex-col px-8 gap-3">
            <div className="flex flex-col items-center mt-20">
              <h3 className="text-[26px] font-bold">Let's have a chat!</h3>
              <h4>I'm currently open to new opportunities.</h4>
            </div>
            <form id="contact_form " onSubmit={contact}>
              <div className="flex flex-col ">
                <label className="text-[14px] font-bold">Name</label>
                <input
                  className="w-[100%] bg-gray-800 outline-none border-b h-[40px] mb-3"
                  name="user_name"
                  type="text"
                  required
                />
                <label className="text-[14px] font-bold">Email</label>
                <input
                  className="w-[100%] bg-gray-800 outline-none border-b h-[40px] mb-3 "
                  name="user_email"
                  type="email"
                  required
                />
                <label className="text-[14px] font-bold">Message</label>
                <textarea
                  className="w-[100%] bg-gray-800 outline-none border-b  resize-y h-[100%] mt-4 mb-3"
                  name="message"
                  type="text"
                  required
                />
              </div>
              <button
                id="contact_subtim"
                className="bg-orange-400 border-2 border-orange-400 text-white font-bold w-[100%] max-w-[240px] p-3 text-[20px] hover:border-white  hover:bg-transparent transition"
              >
                Send it my way
              </button>
            </form>
            <p>
              Thanks for the message! Looking forward to speaking with you soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
