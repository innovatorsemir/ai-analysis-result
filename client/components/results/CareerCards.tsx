import { Briefcase } from "lucide-react";

interface CareerPath {
  title: string;
  reason: string;
  tags: string[];
}

interface CareerCardsProps {
  data: CareerPath[];
}

export function CareerCards({ data }: CareerCardsProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="text-emerald-600" size={28} />
        <h2 className="text-3xl font-bold text-gray-900">Career Paths</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((career, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {career.title}
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {career.reason}
            </p>

            <div className="flex flex-wrap gap-2">
              {career.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
