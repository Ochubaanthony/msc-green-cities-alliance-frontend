const slidesPerPageSize = (windowSize) => {
  if (windowSize < 768) {
    return 1;
  } else if (windowSize < 1024) {
    return 2;
  }
  return 3;
};
const slidesPerPageSize2 = (windowSize) => {
  if (windowSize < 768) {
    return 1;
  } else if (windowSize < 1024) {
    return 2;
  }
  return 3;
};

export { slidesPerPageSize, slidesPerPageSize2 };
