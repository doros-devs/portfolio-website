

const Experience = () => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">CEO and Founder, Doroske</h3>
        <p className="text-gray-600">May 2022 - Present</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Led cross-functional team in venture design process.</li>
          <li>Generated revenue exceeding 500,000 KSH.</li>
          <li>
            Successfully executed high-impact activations and enhanced user
            experience on the platform.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">
          Head of Business Operations, SAMO Branding Agency
        </h3>
        <p className="text-gray-600">October 2021 - May 2022</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Generated annual income of 1,000,000 KSH.</li>
          <li>
            Developed UI/UX and executed social media strategies for client
            acquisition.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">
          Financial Controller, L’Oréal East Africa
        </h3>
        <p className="text-gray-600">June 2019 - December 2022</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Managed the SG&A P&L for 20 departments.</li>
          <li>Enhanced ROI analysis for marketing activations.</li>
        </ul>
      </div>

      {/* Add other experiences similarly */}
    </section>
  );
};

export default Experience;
