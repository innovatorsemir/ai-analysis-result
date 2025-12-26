import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Loader2 } from "lucide-react";

type AnalysisState = "loading" | "error" | "success";

export default function AnalyzingResults() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [state, setState] = useState<AnalysisState>("loading");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Simulate progress incrementing
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 30;
        return Math.min(next, 95); // Cap at 95% until complete
      });
    }, 800);

    // Simulate analysis completion after 4 seconds
    const analysisTimeout = setTimeout(() => {
      setProgress(100);
      setState("success");

      // Redirect to results after 1 second
      const redirectTimeout = setTimeout(() => {
        navigate("/results");
      }, 1000);

      return () => clearTimeout(redirectTimeout);
    }, 4000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(analysisTimeout);
    };
  }, [navigate]);

  const handleRetry = () => {
    setProgress(0);
    setState("loading");
    setErrorMessage("");

    // Retry logic - simulate another attempt
    const retryTimeout = setTimeout(() => {
      setProgress(100);
      setState("success");

      const redirectTimeout = setTimeout(() => {
        navigate("/results");
      }, 1000);

      return () => clearTimeout(redirectTimeout);
    }, 4000);

    return () => clearTimeout(retryTimeout);
  };

  const simulateError = () => {
    setState("error");
    setErrorMessage(
      "Analysis encountered an issue. Please try again or contact support."
    );
    setProgress(45);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
          {/* Loading State */}
          {state === "loading" && (
            <>
              {/* Animated loader */}
              <div className="flex justify-center mb-8">
                <div className="relative w-20 h-20">
                  <Loader2
                    size={80}
                    className="text-indigo-600 animate-spin"
                    strokeWidth={1.5}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Status text */}
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
                Analyzing your future path…
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Our AI is processing your assessment results to generate
                personalized insights
              </p>

              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">
                    Progress
                  </span>
                  <span className="text-sm font-bold text-indigo-600">
                    {Math.round(progress)}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Progress steps */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-600" />
                  <span className="text-gray-600">
                    Processing assessment data
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-600" />
                  <span className="text-gray-600">Analyzing career matches</span>
                </div>
                <div
                  className={`flex items-center gap-3 ${progress < 70 ? "opacity-50" : ""}`}
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-600" />
                  <span className="text-gray-600">
                    Generating personalized insights
                  </span>
                </div>
              </div>

              {/* Debug button for testing error state */}
              <button
                onClick={simulateError}
                className="mt-8 w-full py-2 text-xs text-gray-500 hover:text-gray-700 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
              >
                Test Error State (Demo)
              </button>
            </>
          )}

          {/* Error State */}
          {state === "error" && (
            <>
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-red-100 rounded-full">
                  <AlertCircle size={40} className="text-red-600" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
                Analysis Failed
              </h2>
              <p className="text-center text-gray-600 mb-6">
                {errorMessage}
              </p>

              <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-8">
                <p className="text-sm text-red-800">
                  <strong>What to do:</strong> Click the retry button below to
                  start the analysis again. If the problem persists, please
                  contact our support team.
                </p>
              </div>

              <button
                onClick={handleRetry}
                className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:shadow-lg hover:from-red-700 hover:to-red-800 transition-all duration-300"
              >
                Try Again
              </button>

              <button
                onClick={() => navigate("/")}
                className="w-full mt-3 px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Back to Home
              </button>
            </>
          )}

          {/* Success State */}
          {state === "success" && (
            <>
              <div className="flex justify-center mb-6 animate-pulse">
                <div className="p-3 bg-green-100 rounded-full">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">✓</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center text-gray-900">
                Analysis Complete!
              </h2>
              <p className="text-center text-gray-600 mt-2">
                Redirecting to your personalized insights…
              </p>

              <div className="mt-8 flex justify-center">
                <div className="w-8 h-8">
                  <Loader2
                    size={32}
                    className="text-indigo-600 animate-spin"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer text */}
        <p className="text-center text-gray-500 text-sm mt-6">
          This usually takes 2-5 seconds
        </p>
      </div>
    </div>
  );
}
