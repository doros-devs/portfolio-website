import { ReactTyped } from "react-typed";
import backgroundImage from "../images/Subject3.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-white bg-grid-small-black/[0.2]"
    >
      {/* Main content container with mobile-first layout */}
      <div className="flex flex-col h-full w-full">
        {/* Text content */}
        <div className="w-full flex flex-col items-center justify-start pt-20 md:pt-12 px-4 z-20">
          <div className="text-center">
            <p className="text-xl sm:text-2xl mb-4 text-gray-800">👋, my name is Terence</p>
            <div className="flex flex-col items-center">
              <h2 className="text-[40px] sm:text-[60px] md:text-[50px] lg:text-[80px] text-black">I am</h2>
              <div className="text-[40px] sm:text-[80px] md:text-[60px] lg:text-[120px] font-bold text-black">
                <ReactTyped
                  strings={["Software Engineer", "Product Manager"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                  className="inline-block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative w-full mt-8 md:mt-4">
          <div className="relative w-full" style={{ height: "50vh" }}>
            <div className="md:container md:mx-auto md:px-4">
              <div className="relative w-full md:h-[45vh] lg:h-[80vh]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10"></div>
                <img
                  src={backgroundImage}
                  alt="Profile"
                  className="w-full h-full object-contain object-center md:object-contain lg:object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 pb-8 mt-4 z-20">
          <button className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-none">
            You need a software engineer
          </button>
          <button className="w-full sm:w-auto px-6 py-3 border border-black text-black rounded-none">
            You need a product manager
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
