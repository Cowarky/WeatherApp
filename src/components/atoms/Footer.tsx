const Footer = () => {
  return (
    <div className="text-center mt-10 py-10 text-purple-900">
      <p className="text-2xl">
        Designed & Developed by{" "}
        <span className="text-purple-700">Malek Sabeh Ayoun</span>
      </p>
      <p className="mt-5 sm:mt-0">
        API used:
        <a href="https://open-meteo.com/" className="underline">
          OpenMeteo
        </a>
      </p>
    </div>
  );
};

export default Footer;
