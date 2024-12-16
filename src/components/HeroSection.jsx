import { ReactTyped } from "react-typed";
import backgroundImage from "../images/Subject3.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background text content */}
      <div className="absolute h-full w-full flex flex-col items-center justify-start pt-20 px-4">
        <div className="text-center">
          <p className="text-2xl mb-4 text-gray-800">👋, my name is Terence</p>
          <div className="flex flex-col items-center">
            <h2 className="text-[80px] text-black">I am</h2>
            <div className="text-[120px] font-bold text-black">
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

      {/* Foreground image and buttons */}
      <div className="relative h-full w-full flex flex-col items-center">
        {/* Buttons positioned above the image */}
        <div className="mt-[600px] flex gap-4 justify-center z-20">
          <button className="px-6 py-3 bg-black text-white rounded-none">
            You need a software engineer
          </button>
          <button className="px-6 py-3 border border-black text-black rounded-none">
            You need a product manager
          </button>
        </div>

        {/* Hero image */}
        <div
          className="absolute -bottom-[50px] left-0 right-0 w-full"
          style={{ height: "70%" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10"></div>
          <img
            src={backgroundImage}
            alt="Profile"
            className="w-full h-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
