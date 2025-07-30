const ToDay = ({ temp, day, titled }) => {
  // console.log("hello world");
  return (
    <>
      <div className={titled}>
        <h1 style={{ margin: "0.3em 0" }}> {temp} </h1>
        <h2 className="text-light-blue">{day}</h2>
      </div>
    </>
  );
};

export default ToDay;
