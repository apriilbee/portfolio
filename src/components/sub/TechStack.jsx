import { techIcons } from "@/assets";

const TechSection = ({ title, items }) => (
  <div className="mb-8">
    <h4 className="text-md font-semibold text-dark dark:text-white mb-2">{title}</h4>
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-1 text-center">
      {items.map((tech, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          {tech.icon}
          <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const TechStack = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-dark dark:text-white mb-4">Tech Stack</h3>
      <TechSection title="Frontend" items={techIcons.frontend} />
      <TechSection title="Backend" items={techIcons.backend} />
      <TechSection title="DevOps & Tooling" items={techIcons.devops} />
      <TechSection title="Data Science / ML" items={techIcons.data} />
    </div>
  );
};

export default TechStack;
