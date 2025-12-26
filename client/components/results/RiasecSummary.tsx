import { Brain } from "lucide-react";

interface RiasecItem {
  type: string;
  score: number;
}

interface RiasecSummaryProps {
  data: RiasecItem[];
}

const riasecDescriptions: Record<string, string> = {
  Realistic: "Hands-on, practical problem-solving",
  Investigative: "Analytical thinking and discovery",
  Artistic: "Creative expression and innovation",
  Social: "People-focused collaboration",
  Enterprising: "Leadership and persuasion",
  Conventional: "Organization and systems",
};

export function RiasecSummary({ data }: RiasecSummaryProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-8">
        <Brain className="text-indigo-600" size={28} />
        <h2 className="text-3xl font-bold text-gray-900">RIASEC Profile</h2>
      </div>

      <div className="bg-white rounded-xl p-8 border border-gray-200">
        <p className="text-gray-600 mb-8">
          Your career personality breakdown across the six main dimensions:
        </p>

        <div className="space-y-6">
          {data.map((item) => (
            <div key={item.type} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {item.type}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {riasecDescriptions[item.type]}
                  </p>
                </div>
                <span className="text-2xl font-bold text-indigo-600">
                  {item.score}%
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-700"
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-700">
            <strong className="text-gray-900">What this means:</strong> Your
            highest scores indicate your natural strengths and preferred work
            environment. This doesn't limit you—it guides you toward roles where
            you'll thrive most.
          </p>
        </div>
      </div>
    </div>
  );
}
