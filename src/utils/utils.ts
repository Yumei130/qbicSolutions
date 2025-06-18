const getImagePrefix = () => {
  return process.env.NODE_ENV === "production" ? "/QbicSolutions/" : "";
};

export { getImagePrefix };
