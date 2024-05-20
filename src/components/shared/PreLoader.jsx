import { useEffect } from "react";

const PreLoader = () => {
  useEffect(() => {
    const hideSpinner = setTimeout(() => {
      const spinnerElement = document.getElementById("spinner");
      if (spinnerElement) {
        spinnerElement.classList.remove("show");
      }
    }, 1);

    return () => clearTimeout(hideSpinner); // Cleanup function to clear the timeout
  }, []);

  return (
    <div
      id="spinner"
      className="show h-screen fixed top-0 left-0 z-50 bg-white opacity-75 flex items-center justify-center w-screen"
    >
      <div
        className="animate-ping bg-secondary w-10 h-10 rounded-full"
        role="status"
      ></div>
    </div>
  );
};

export default PreLoader;
