import { Rocket, Clock, Zap } from "lucide-react";

interface Project {
  title: string;
  description: string;
  duration: number;
  difficulty: "Easy" | "Medium" | "Hard";
}

interface ProjectCardsProps {
  data: Project[];
}

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-50 text-green-700 border-green-200",
  Medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Hard: "bg-red-50 text-red-700 border-red-200",
};

const difficultyIcons: Record<string, string> = {
  Easy: "⭐",
  Medium: "⭐⭐",
  Hard: "⭐⭐⭐",
};

export function ProjectCards({ data }: ProjectCardsProps) {
  const handleStartProject = (title: string) => {
    console.log(`Started project: ${title}`);
    alert(`Ready to start: ${title}? Great! Your mentors will guide you.`);
  };

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-8">
        <Rocket className="text-cyan-600" size={28} />
        <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
      </div>

      <div className="space-y-6">
        {data.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 items-center mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock size={20} className="text-cyan-600" />
                  <span className="font-semibold">{project.duration} weeks</span>
                </div>

                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-semibold ${difficultyColors[project.difficulty]}`}
                >
                  <Zap size={18} />
                  <span>{project.difficulty}</span>
                  <span className="ml-1">{difficultyIcons[project.difficulty]}</span>
                </div>
              </div>

              <button
                onClick={() => handleStartProject(project.title)}
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
              >
                Start This Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
