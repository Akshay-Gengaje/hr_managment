const Content = ({ children, className }) => {
  return (
    <div className={`p-5 bg-white m-3 rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Content;
