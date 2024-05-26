import { useMemo } from "react";

const useProductCategory = (data, key) => {
  const uniqueData = useMemo(() => {
    const seen = new Set();
    return data.filter((item) => {
      const identifier = key ? item[key] : item;
      if (seen.has(identifier)) {
        return false;
      } else {
        seen.add(identifier);
        return true;
      }
    });
  }, [data, key]);

  return uniqueData;
};

export default useProductCategory;
