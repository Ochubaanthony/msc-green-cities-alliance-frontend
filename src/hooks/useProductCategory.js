import { useMemo } from "react";

const useProductCategory = (data, key) => {
  const uniqueData = useMemo(() => {
    const container = new Set();
    return data.filter((item) => {
      const identifier = key ? item[key] : item;
      if (container.has(identifier)) {
        return false;
      } else {
        container.add(identifier);
        return true;
      }
    });
  }, [data, key]);

  return uniqueData;
};

export default useProductCategory;
