// THis is content box which have some design we can reuse it

const Content = ({ children, className }) => {
  return (
    <div className={`p-5 bg-white m-3 rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Content;
