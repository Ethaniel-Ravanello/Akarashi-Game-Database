import React from "react";

const Modal = ({ showModal, setShowModal, data }: any) => {
  console.log(data);
  return (
    <>
      <div
        onClick={() => setShowModal(false)}
        className="justify-center bg-primary-100/80 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-[80%] my-6 mx-auto">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-primary-300 outline-none focus:outline-none">
            <img src={data.url} loading="lazy" alt="" />
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
