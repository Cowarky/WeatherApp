import Today from "@/components/atoms/Today.tsx";
import getForecast from "@/services/API/actions.ts";
import { useState, useEffect } from "react";
import { getToday } from "../../services/utils/utils";

interface structure {
  index: number;
  date: Date | string;
  temperature: number | string;
}

const getData = async (): Promise<structure[]> => {
  return new Promise<structure[]>(async (resolve, reject) => {
    const data = await getForecast();
    resolve(data);
  });
};

const TemperatureWeek = () => {
  const [temps, setTemps] = useState<structure[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setTemps(data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-row w-full xl:h-dvh xs:h-full">
      <div className="align-middle m-auto w-full xl:p-20">
        <div className="flex flex-col flex-wrap gap-5 items-center text-center justify-center w-full h-full">
          {temps.map((temp) => {
            if (temp.date == getToday()) {
              return (
                <Today
                  key={temp.index}
                  temp={temp.temperature + " °C"}
                  day={temp.date}
                  titled="text-5xl text-bright-blue"
                />
              );
            }
          })}
          <div className="flex flex-row flex-wrap text-center justify-items-center justify-evenly w-full text-2xl text-blue-400">
            {temps.map((temp) => {
              if (temp.date == getToday()) {
                return;
              } else {
                return (
                  <Today
                    key={temp.index}
                    temp={temp.temperature + " °C"}
                    day={temp.date}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureWeek;
