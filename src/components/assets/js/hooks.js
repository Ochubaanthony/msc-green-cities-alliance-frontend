import { useState, useEffect } from "react";

// search products
const useSearchProducts = (url) => {
  const [data, setData] = useState(null);

  // Sample data
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("Data: ", data);
        setData(data);
      });
  }, [url]);

  return [data];
};

export { useSearchProducts };
