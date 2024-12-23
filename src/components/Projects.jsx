import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import PropTypes from 'prop-types';
import dorosImage from "../images/doros.png";
import patisserieImage from "../images/lapatesseriedejoie.png";
import petpalImage from "../images/petpal.png";
import afriTrimImage from "../images/afri-trim.png";
import inventaImage from "../images/inventa.png";

const ProjectCard = ({ project }) => {
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
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full aspect-[16/9] rounded-xl bg-white shadow-lg overflow-hidden preserve-3d"
        >
          <motion.div
            style={{
              transform: "translateZ(75px)",
            }}
            className="w-full h-full preserve-3d"
          >
            <img
              src={project.image}
              alt={`Project ${project.id}`}
              className="w-full h-full object-cover backface-hidden"
            />
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: dorosImage,
      url: "https://doros.wedding/",
    },
    {
      id: 2,
      image: patisserieImage,
      url: "https://lapatesseriedejoie.vercel.app/",
    },
    {
      id: 3,
      image: petpalImage,
      url: "https://project-petpal.vercel.app/",
    },
    {
      id: 4,
      image: afriTrimImage,
      url: "https://afri-trim.vercel.app/",
    },
    {
      id: 5,
      image: inventaImage,
      url: "https://inventa-project.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="pb-20 px-4 bg-white bg-grid-small-black/[0.2]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-[40px] sm:text-[60px] lg:text-[80px] mb-8 md:mb-16 text-[#E2FF7D]">
          MY PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
