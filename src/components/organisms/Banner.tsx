import TemperatureWeek from "@/components/molecules/TemperatureWeek.tsx";
import Logo from "@/components/atoms/Logo.tsx";
import forcast from "@/services/API/actions.ts";

const Banner = () => {
  console.log(forcast);
  return (
    <div className="h-full w-full bg-no-repeat bg-center bg-cover bg-gradient-to-b from-25% bg-soft-blue to-90% to-blue-50">
      <Logo />
      <TemperatureWeek />
    </div>
  );
};

export default Banner;
