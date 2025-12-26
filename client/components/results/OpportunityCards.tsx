import { MapPin } from "lucide-react";

interface LocalOpportunity {
  title: string;
  location: string;
}

interface OpportunityCardsProps {
  data: LocalOpportunity[];
}

export function OpportunityCards({ data }: OpportunityCardsProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-8">
        <MapPin className="text-red-600" size={28} />
        <h2 className="text-3xl font-bold text-gray-900">
          Local Opportunities
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((opportunity, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-3 mb-2">
              <MapPin className="text-red-600 flex-shrink-0 mt-1" size={20} />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">
                  {opportunity.title}
                </h3>
              </div>
            </div>

            <p className="text-gray-600 ml-8 text-sm">
              {opportunity.location}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-200">
        <p className="text-gray-700">
          <strong className="text-gray-900">🌍 Global Reach:</strong> These are
          some of the most accessible hubs in Africa and globally. Many offer
          internships, mentorship, and funding opportunities for talented
          students like you.
        </p>
      </div>
    </div>
  );
}
