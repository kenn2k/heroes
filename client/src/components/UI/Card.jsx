const Card = ({ children }) => {
  return (
    <div className="p-8 border rounded-lg shadow-xl xs:w-full md:w-[696px]">
      {children}
    </div>
  );
};

export default Card;
