const ToDay = ({ temp, day, titled }) => {
  // console.log("hello world");
  return (
    <>
      <div className={titled}>
        <h1> {temp} </h1>
        <h2 className="text-soft-blue">{day}</h2>
      </div>
    </>
  );
};

export default ToDay;
