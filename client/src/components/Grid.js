import React from "react";
import { ToastContainer } from "react-toastify";
import LoadingBar from "react-top-loading-bar";

function Grid({ loadingBarValue, children }) {
  return (
    <>
      <LoadingBar
        loaderSpeed={1000}
        color="#000000"
        height={3}
        progress={loadingBarValue}
      />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />

      <div className="md:pl-52 pt-10 mx-4 animate-slide-in-up">{children}</div>
    </>
  );
}

export default Grid;
