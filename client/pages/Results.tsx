import { useNavigate } from "react-router-dom";
import { ResultsHeader } from "@/components/results/ResultsHeader";
import { RiasecSummary } from "@/components/results/RiasecSummary";
import { CareerCards } from "@/components/results/CareerCards";
import { IndustryCards } from "@/components/results/IndustryCards";
import { ProjectCards } from "@/components/results/ProjectCards";
import { OpportunityCards } from "@/components/results/OpportunityCards";
import { CommunityCards } from "@/components/results/CommunityCards";
import { ActionButtons } from "@/components/results/ActionButtons";
import { mockAiData } from "@/mocks/aiData";
import { ArrowLeft } from "lucide-react";

export default function Results() {
  const navigate = useNavigate();

  const handleRegenerate = () => {
    // Navigate back to analyzing results page
    navigate("/analyzing-results");
  };

  const handleDownload = () => {
    // Create a formatted JSON file with all results
    const dataToExport = {
      generatedAt: new Date().toISOString(),
      ...mockAiData,
    };

    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(dataToExport, null, 2)], {
      type: "application/json",
    });
    element.href = URL.createObjectURL(file);
    element.download = `career-insights-${new Date().getTime()}.json`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header section */}
        <ResultsHeader summary={mockAiData.summary} />

        {/* RIASEC profile section */}
        <RiasecSummary data={mockAiData.riasec} />

        {/* Career paths section */}
        <CareerCards data={mockAiData.career_paths} />

        {/* Industries section */}
        <IndustryCards data={mockAiData.industries} />

        {/* Projects section */}
        <ProjectCards data={mockAiData.projects} />

        {/* Local opportunities section */}
        <OpportunityCards data={mockAiData.local_opportunities} />

        {/* Communities section */}
        <CommunityCards data={mockAiData.communities} />

        {/* Action controls */}
        <ActionButtons onRegenerate={handleRegenerate} onDownload={handleDownload} />

        {/* Footer spacing */}
        <div className="mt-12" />
      </div>
    </div>
  );
}
