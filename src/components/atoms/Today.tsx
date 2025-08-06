interface ToDayProps {
  temp: string;
  day: string;
  titled: string;
}

const ToDay: React.FC<ToDayProps> = ({ temp, day, titled }) => {
  return (
    <div className={titled}>
      <h1 style={{ margin: "0.3em 0" }}>{temp}</h1>
      <h2 className="text-secondary">{day}</h2>
    </div>
  );
};

export default ToDay;
