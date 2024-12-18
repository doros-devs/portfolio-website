// Import all the logos - you'll need to add these to your project
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

const Skills = () => {
  const handleDownloadCV = () => {
    // Add your CV file to the public folder and update the path
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
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-[80px] mb-16 text-[#E2FF7D]">
          MY SKILLS
        </h2>

        <div className="flex justify-between gap-16">
          {/* Skills grid */}
          <div className="grid grid-cols-4 gap-6 flex-1">
            <div className="aspect-square bg-white rounded-2xl p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={jsLogo}
                alt="JavaScript"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="aspect-square bg-white rounded-2xl p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={reactLogo}
                alt="React"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="aspect-square bg-white rounded-2xl p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={dockerLogo}
                alt="Docker"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="aspect-square bg-white rounded-2xl p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={pythonLogo}
                alt="Python"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="aspect-square bg-white rounded-2xl p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={djangoLogo}
                alt="Django"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="aspect-square bg-white rounded-2xl p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={flaskLogo}
                alt="Flask"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="aspect-square bg-white rounded-2xl p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={tailwindLogo}
                alt="Tailwind"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="aspect-square bg-white rounded-2xl p-8 flex items-center justify-center border-[1px] border-black">
              <img
                src={firebaseLogo}
                alt="Firebase"
                className="h-16 w-16 object-contain"
              />
            </div>
          </div>

          {/* Experience and CV Download */}
          <div className="w-[400px] bg-white rounded-2xl p-12 border-[1px] border-black flex flex-col items-center justify-center">
            <div className="text-center mb-8">
              <h3 className="text-[72px] font-bold text-black">1</h3>
              <p className="text-2xl">
                Years
                <br />
                Experience
                <br />
                Working
              </p>
            </div>

            <button
              onClick={handleDownloadCV}
              className="bg-[#E2FF7D] text-black px-8 py-3 rounded-full hover:bg-[#d4f06e] transition-colors"
            >
              DOWNLOAD MY CV
            </button>
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="rounded-2xl border-[1px] border-black mt-12 ">
          <h3 className="text-center text-[40px]  text-[#E2FF7D] mt-12">
            ADDITIONAL SKILLS
          </h3>
          <div className="flex justify-center items-center">
            <div className="flex-1 grid grid-cols-6 bg-grid-small-black/[0.2]">
              <div className="aspect-square bg-white rounded-2xl p-4 flex items-center justify-center">
                <img
                  src={typescriptLogo}
                  alt="TypeScript"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <div className="aspect-square bg-white rounded-2xl p-6 flex items-center justify-center">
                <img
                  src={mysqlLogo}
                  alt="MySQL"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <div className="aspect-square bg-white rounded-2xl p-6 flex items-center justify-center">
                <img
                  src={sqliteLogo}
                  alt="SQLite"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <div className="aspect-square bg-white rounded-2xl p-6 flex items-center justify-center">
                <img
                  src={bootstrapLogo}
                  alt="Bootstrap"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <div className="aspect-square bg-white rounded-2xl p-6 flex items-center justify-center">
                <img
                  src={vercelLogo}
                  alt="Vercel"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <div className="aspect-square bg-white rounded-2xl p-6 flex items-center justify-center">
                <img
                  src={nextjsLogo}
                  alt="Next.js"
                  className="h-16 w-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
