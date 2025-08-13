import TemperatureWeek from "../molecules/TemperatureWeek.tsx";
import Logo from "../atoms/Logo.tsx";
// import Footer from "../atoms/Footer.tsx";
import ToggleTheme from "../../hooks/ToggleTheme.tsx";
// import { useEffect } from "react";
import AnimatedWind from "../molecules/AnimatedWind";
import Sunny from "../atoms/Sunny.tsx";

const Banner = () => {
  // useEffect(() => {
  ToggleTheme();
  // }, []);
  return (
    // <div className="h-full w-full pb-20 bg-no-repeat bg-center bg-cover animated-gradient bg-gradient-to-t from-15% bg-soft-blue to-90% to-blue-50">
    <>
    <Sunny />
      <AnimatedWind />
      <div className="h-full w-full pb-20 bg-no-repeat bg-center bg-cover bg-gradient-to-b from-primary to-primary-complementary text-shadow-2xs">
        <Logo />
        <TemperatureWeek />
        {/*<Footer />*/}
      </div>
      
    </>
  );
};

export default Banner;
