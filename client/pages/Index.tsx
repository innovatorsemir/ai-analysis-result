import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Target, Brain, Zap, Users } from "lucide-react";

export default function Index() {
  const navigate = useNavigate();

  const startAnalysis = () => {
    navigate("/analyzing-results");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white bg-opacity-80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg">
                <Sparkles size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI Analysis & Result
              </span>
            </div>

            <button
              onClick={startAnalysis}
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6 border border-purple-200">
              <Sparkles size={16} />
              AI-Powered Career Guidance
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Your
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Perfect Career Path
              </span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Take personalized assessments and get AI-powered insights about
              career paths, industry opportunities, projects, and communities
              that match your unique skills and passions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={startAnalysis}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-lg"
              >
                Start Analysis <ArrowRight size={20} />
              </button>

              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-lg border-2 border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 text-lg">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-bold text-indigo-600">150K+</p>
                <p className="text-gray-600 text-sm">Students Guided</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-600">50+</p>
                <p className="text-gray-600 text-sm">Career Paths</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-600">95%</p>
                <p className="text-gray-600 text-sm">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-300 rounded-3xl opacity-20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-indigo-300 rounded-3xl opacity-20 blur-3xl" />

            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="space-y-6">
                {/* Card 1 */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-600 rounded-lg mt-1">
                      <Brain size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        Personalized Assessment
                      </p>
                      <p className="text-sm text-gray-600">
                        Answer questions about your skills, interests, and values
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-600 rounded-lg mt-1">
                      <Zap size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        AI Analysis
                      </p>
                      <p className="text-sm text-gray-600">
                        Get instant insights powered by advanced AI
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-600 rounded-lg mt-1">
                      <Target size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        Actionable Results
                      </p>
                      <p className="text-sm text-gray-600">
                        Get career paths, projects, and opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-white border-t border-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You'll Discover
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive insights tailored to your unique profile
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
              <div className="p-3 w-fit bg-indigo-100 rounded-lg mb-4">
                <Brain className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                RIASEC Profile
              </h3>
              <p className="text-gray-600">
                Understand your career personality type and work preferences
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
              <div className="p-3 w-fit bg-emerald-100 rounded-lg mb-4">
                <Sparkles className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Career Paths
              </h3>
              <p className="text-gray-600">
                Explore multiple career options aligned with your strengths
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="p-3 w-fit bg-purple-100 rounded-lg mb-4">
                <Target className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Projects</h3>
              <p className="text-gray-600">
                Get hands-on projects to build real-world experience
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <div className="p-3 w-fit bg-orange-100 rounded-lg mb-4">
                <Users className="text-orange-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Communities
              </h3>
              <p className="text-gray-600">
                Connect with communities and find local opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Find Your Perfect Career?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Complete your personalized assessment and get AI-powered insights in
            just a few minutes
          </p>

          <button
            onClick={startAnalysis}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
          >
            Start Your Analysis <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg">
                  <Sparkles size={20} className="text-white" />
                </div>
                <span className="font-bold text-white">CareerAI</span>
              </div>
              <p className="text-sm">
                Empowering students with AI-driven career guidance
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2025 AI Analysis & Result. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition text-sm">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition text-sm">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition text-sm">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
