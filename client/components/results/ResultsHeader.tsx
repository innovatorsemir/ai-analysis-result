import { Sparkles } from "lucide-react";

interface ResultsHeaderProps {
  summary: string;
}

export function ResultsHeader({ summary }: ResultsHeaderProps) {
  return (
    <div className="relative mb-8 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-10 border border-blue-100">
      {/* Decorative sparkles in background */}
      <div className="absolute top-4 right-4 text-blue-300 opacity-30">
        <Sparkles size={40} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Your Personalized Career Insights
          </h1>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 mb-6">
          <Sparkles size={16} className="text-blue-600" />
          <span className="text-sm font-semibold text-blue-600">
            AI Generated
          </span>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          {summary}
        </p>
      </div>
    </div>
  );
}
