const Container = ({ children, px }) => {
  return <div className={`container mx-auto md:px-20 ${px}`}>{children}</div>;
};
export default Container;
