import TemperatureWeek from "../molecules/TemperatureWeek.tsx";
import Logo from "../atoms/Logo.tsx";
import Footer from "../atoms/Footer.tsx";

const Banner = () => {
  return (
    <div className="h-full w-full pb-20 bg-no-repeat bg-center bg-cover animated-gradient bg-gradient-to-t from-15% bg-soft-blue to-90% to-blue-50">
      <Logo />
      <TemperatureWeek />
      <Footer />
    </div>
  );
};

export default Banner;
