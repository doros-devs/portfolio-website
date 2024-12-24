import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import PropTypes from 'prop-types';
// Import all the logos
import jsLogo from "../images/javascript-logo.png";
import reactLogo from "../images/react-logo.png";
import dockerLogo from "../images/docker-logo.png";
import pythonLogo from "../images/python-logo.png";
import djangoLogo from "../images/django-logo.png";
import flaskLogo from "../images/flask-logo.png";
import tailwindLogo from "../images/tailwind-logo.png";
import firebaseLogo from "../images/firebase-logo.png";
import typescriptLogo from "../images/typescript-logo.png";
import mysqlLogo from "../images/mysql-logo.png";
import sqliteLogo from "../images/sqlite-logo.png";
import bootstrapLogo from "../images/bootstrap-logo.png";
import vercelLogo from "../images/vercel-logo.png";
import nextjsLogo from "../images/nextjs-logo.png";

const SkillCard = ({ logo, alt }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  });

  const mouseYSpring = useSpring(y, {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["25deg", "-25deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-25deg", "25deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative perspective">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full relative preserve-3d"
      >
        <div className="aspect-square bg-white rounded-2xl p-3 md:p-4 lg:p-6 flex items-center justify-center preserve-3d">
          <motion.div
            style={{
              transform: "translateZ(50px)",
            }}
            className="w-full h-full preserve-3d flex items-center justify-center"
          >
            <img
              src={logo}
              alt={alt}
              className="h-16 w-16 object-contain backface-hidden"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

SkillCard.propTypes = {
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const Skills = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/your-cv.pdf";
    link.download = "Terence-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="skills"
      className="py-10 px-4 bg-white md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] mb-8 md:mb-16 text-[#E2FF7D]">
          MY SKILLS
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 flex-1">
            <div className="aspect-square bg-white rounded-2xl p-4 md:p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={jsLogo}
                alt="JavaScript"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="aspect-square bg-white rounded-2xl p-4 md:p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={reactLogo}
                alt="React"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="aspect-square bg-white rounded-2xl p-4 md:p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={dockerLogo}
                alt="Docker"
                className="h-20 w-20 object-contain"
              />
            </div>
            <div className="aspect-square bg-white rounded-2xl p-4 md:p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={pythonLogo}
                alt="Python"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="aspect-square bg-white rounded-2xl p-4 md:p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={djangoLogo}
                alt="Django"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="aspect-square bg-white rounded-2xl p-4 md:p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={flaskLogo}
                alt="Flask"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="aspect-square bg-white rounded-2xl p-4 md:p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={tailwindLogo}
                alt="Tailwind"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="aspect-square bg-white rounded-2xl p-4 md:p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={firebaseLogo}
                alt="Firebase"
                className="h-16 w-16 object-contain"
              />
            </div>
          </div>

          <div className="w-full lg:w-[400px] bg-white rounded-2xl p-6 md:p-8 lg:p-12 border-[1px] border-black flex flex-col items-center justify-center">
            <div className="text-center mb-4 md:mb-8">
              <h3 className="text-[36px] sm:text-[48px] lg:text-[72px] font-bold text-black">
                1
              </h3>
              <p className="text-base sm:text-xl lg:text-2xl">
                Years
                <br />
                Experience
                <br />
                Working
              </p>
            </div>

            <button
              onClick={handleDownloadCV}
              className="bg-[#E2FF7D] text-black px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-full hover:bg-[#d4f06e] transition-colors text-sm md:text-base"
            >
              DOWNLOAD MY CV
            </button>
          </div>
        </div>

        <div className="rounded-2xl border-[1px] border-black mt-8 lg:mt-12">
          <h3 className="text-center text-[24px] sm:text-[30px] md:text-[40px] text-[#E2FF7D] mt-6 md:mt-8 lg:mt-12">
            ADDITIONAL SKILLS
          </h3>
          <div className="flex justify-center items-center p-4">
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <SkillCard logo={typescriptLogo} alt="TypeScript" />
              <SkillCard logo={mysqlLogo} alt="MySQL" />
              <SkillCard logo={sqliteLogo} alt="SQLite" />
              <SkillCard logo={bootstrapLogo} alt="Bootstrap" />
              <SkillCard logo={vercelLogo} alt="Vercel" />
              <SkillCard logo={nextjsLogo} alt="Next.js" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
