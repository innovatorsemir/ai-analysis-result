import { Users } from "lucide-react";

interface Community {
  name: string;
  description: string;
}

interface CommunityCardsProps {
  data: Community[];
}

export function CommunityCards({ data }: CommunityCardsProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-8">
        <Users className="text-purple-600" size={28} />
        <h2 className="text-3xl font-bold text-gray-900">Communities</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((community, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {community.name}
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {community.description}
            </p>

            <button className="w-full px-4 py-2 bg-purple-50 text-purple-700 rounded-lg font-semibold border border-purple-200 hover:bg-purple-100 transition-colors duration-300">
              Learn More & Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
