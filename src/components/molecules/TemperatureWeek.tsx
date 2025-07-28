import Today from "@/components/atoms/Today.tsx";

const TemperatureWeek = () => {
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="align-middle m-auto w-full xl:p-20">
        <div className="flex flex-col flex-wrap gap-5 items-center text-center justify-center w-full h-full">
          <Today temp="20" day="sunday" titled="text-5xl text-bright-blue" />
          <div className="flex flex-row gap-2 flex-wrap text-center justify-items-center justify-evenly w-full text-2xl text-light-blue">
            <Today temp="20" day="sunday" />
            <Today temp="20" day="monday" />
            <Today temp="20" day="tuesday" />
            <Today temp="20" day="wednesday" />
            <Today temp="20" day="thursday" />
            <Today temp="20" day="friday" />
            <Today temp="20" day="saturday" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureWeek;
