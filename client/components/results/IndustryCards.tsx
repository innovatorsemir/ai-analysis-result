import { TrendingUp } from "lucide-react";

interface Industry {
  name: string;
  reason: string;
}

interface IndustryCardsProps {
  data: Industry[];
}

export function IndustryCards({ data }: IndustryCardsProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-8">
        <TrendingUp className="text-orange-600" size={28} />
        <h2 className="text-3xl font-bold text-gray-900">Industries</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((industry, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {industry.name}
            </h3>

            <p className="text-gray-600 leading-relaxed">{industry.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
