import React from "react";

const Mail = () => {
  let isModalOpen = false;
  function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("invinsible");
    }
    isModalOpen = true;
    document.body.classList += "invinsible";
  }

  return (
    <div
      className="w-[60px] h-[60px] text-[32px] rounded-full border-none bg-black text-white items-center justify-center flex cursor-pointer fixed bottom-[32px] right-[40px] "
      onClick={toggleModal}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-8 h-8"
      >
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    </div>
  );
};

export default Mail;
