import { useState, useEffect, useCallback } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleSize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleSize);

    // Initial call to set the size correctly
    handleSize();

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [handleSize]);

  return windowSize;
};

export default useWindowSize;
