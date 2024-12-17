import dorosImage from "../images/doros.png";
import patisserieImage from "../images/lapatesseriedejoie.png";
import petpalImage from "../images/petpal.png";
import afriTrimImage from "../images/afri-trim.png";
import inventaImage from "../images/inventa.png";

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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-[80px] mb-16 text-black">MY PROJECTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[16/9] rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-105 bg-white p-4"
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 