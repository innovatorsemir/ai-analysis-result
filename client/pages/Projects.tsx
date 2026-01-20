import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Rocket,
  Clock,
  Zap,
  Loader2,
  CheckCircle,
  Pause,
  Plus,
  ChevronDown,
  Trash2,
  Edit,
  Save,
  X,
  Sparkles,
} from "lucide-react";
import { mockAiData, ActiveProject, ProjectStatus } from "@/mocks/aiData";

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

const statusIcons: Record<ProjectStatus, React.ReactNode> = {
  planning: <Rocket size={18} className="text-blue-600" />,
  in_progress: <Loader2 size={18} className="text-cyan-600 animate-spin" />,
  completed: <CheckCircle size={18} className="text-green-600" />,
  paused: <Pause size={18} className="text-orange-600" />,
};

const statusColors: Record<ProjectStatus, string> = {
  planning: "bg-blue-50 text-blue-700 border-blue-200",
  in_progress: "bg-cyan-50 text-cyan-700 border-cyan-200",
  completed: "bg-green-50 text-green-700 border-green-200",
  paused: "bg-orange-50 text-orange-700 border-orange-200",
};

const statusLabels: Record<ProjectStatus, string> = {
  planning: "Planning",
  in_progress: "In Progress",
  completed: "Completed",
  paused: "Paused",
};

const statusBgColors: Record<ProjectStatus, string> = {
  planning: "bg-blue-100",
  in_progress: "bg-cyan-100",
  completed: "bg-green-100",
  paused: "bg-orange-100",
};

interface ExpandedProject {
  id: string;
  notes: string;
  progress: number;
}

export default function Projects() {
  const navigate = useNavigate();
  const [activeProjects, setActiveProjects] = useState<ActiveProject[]>([]);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [projectNotes, setProjectNotes] = useState<Record<string, string>>({});
  const [projectProgress, setProjectProgress] = useState<Record<string, number>>({});
  const [editingNotes, setEditingNotes] = useState<Record<string, boolean>>({});

  // Load active projects and metadata from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("activeProjects");
    const storedNotes = localStorage.getItem("projectNotes");
    const storedProgress = localStorage.getItem("projectProgress");

    if (stored) {
      try {
        setActiveProjects(JSON.parse(stored));
      } catch (error) {
        console.error("Failed to load active projects:", error);
      }
    }

    if (storedNotes) {
      try {
        setProjectNotes(JSON.parse(storedNotes));
      } catch (error) {
        console.error("Failed to load project notes:", error);
      }
    }

    if (storedProgress) {
      try {
        setProjectProgress(JSON.parse(storedProgress));
      } catch (error) {
        console.error("Failed to load project progress:", error);
      }
    }
  }, []);

  // Save active projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("activeProjects", JSON.stringify(activeProjects));
  }, [activeProjects]);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("projectNotes", JSON.stringify(projectNotes));
  }, [projectNotes]);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem("projectProgress", JSON.stringify(projectProgress));
  }, [projectProgress]);

  const handleStartProject = (
    projectTitle: string,
    description: string,
    duration: number,
    difficulty: string
  ) => {
    const newProject: ActiveProject = {
      id: `project-${Date.now()}`,
      title: projectTitle,
      description,
      status: "planning",
      startDate: new Date().toISOString().split("T")[0],
      duration,
      difficulty: difficulty as "Easy" | "Medium" | "Hard",
    };

    setActiveProjects([...activeProjects, newProject]);
    setProjectNotes({ ...projectNotes, [newProject.id]: "" });
    setProjectProgress({ ...projectProgress, [newProject.id]: 0 });
  };

  const handleStatusChange = (projectId: string, newStatus: ProjectStatus) => {
    setActiveProjects(
      activeProjects.map((project) =>
        project.id === projectId ? { ...project, status: newStatus } : project
      )
    );
  };

  const handleRemoveProject = (projectId: string) => {
    setActiveProjects(activeProjects.filter((project) => project.id !== projectId));
    const { [projectId]: _, ...remainingNotes } = projectNotes;
    const { [projectId]: __, ...remainingProgress } = projectProgress;
    setProjectNotes(remainingNotes);
    setProjectProgress(remainingProgress);
    if (expandedProject === projectId) {
      setExpandedProject(null);
    }
  };

  const handleUpdateProgress = (projectId: string, progress: number) => {
    const bounded = Math.max(0, Math.min(100, progress));
    setProjectProgress({ ...projectProgress, [projectId]: bounded });
  };

  const handleUpdateNotes = (projectId: string, notes: string) => {
    setProjectNotes({ ...projectNotes, [projectId]: notes });
  };

  const isProjectStarted = (projectTitle: string) => {
    return activeProjects.some((p) => p.title === projectTitle);
  };

  const getProjectDetails = (projectTitle: string) => {
    return activeProjects.find((p) => p.title === projectTitle);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/results")}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Results
          </button>
          <div className="flex items-center gap-2">
            <Rocket className="text-indigo-600" size={24} />
            <span className="text-lg font-bold text-gray-900">Project Hub</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Your Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Track your learning journey. Start projects, monitor progress, and build a portfolio of meaningful work.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-3xl font-bold text-indigo-600">{activeProjects.length}</div>
            <div className="text-sm text-gray-600">Active Projects</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-3xl font-bold text-green-600">
              {activeProjects.filter((p) => p.status === "completed").length}
            </div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-3xl font-bold text-cyan-600">{mockAiData.projects.length}</div>
            <div className="text-sm text-gray-600">Available to Start</div>
          </div>
        </div>

        {/* Active Projects Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Loader2 className="text-indigo-600" size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Active Projects {activeProjects.length > 0 && <span className="text-indigo-600">({activeProjects.length})</span>}
              </h2>
              <p className="text-sm text-gray-600 mt-1">Projects you're currently working on</p>
            </div>
          </div>

          {activeProjects.length === 0 ? (
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border-2 border-dashed border-indigo-300 p-12 text-center">
              <div className="inline-block p-4 bg-white rounded-full mb-4 border-2 border-indigo-200">
                <Rocket className="text-indigo-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to get started?</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                Browse AI-suggested projects below and click "Start Project" to begin your learning journey.
              </p>
              <div className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm">
                Scroll down to explore
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activeProjects.map((project) => (
                <div
                  key={project.id}
                  className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    expandedProject === project.id
                      ? "bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-400 shadow-xl"
                      : `${statusBgColors[project.status]} border-gray-200 hover:border-indigo-300 hover:shadow-lg`
                  }`}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600">
                          Started {new Date(project.startDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                      <div
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-semibold text-sm ${
                          statusColors[project.status]
                        }`}
                      >
                        {statusIcons[project.status]}
                        <span>{statusLabels[project.status]}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{project.description}</p>

                    {/* Progress bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">Progress</span>
                        <span className="text-sm font-bold text-indigo-600">
                          {projectProgress[project.id] || 0}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-300"
                          style={{ width: `${projectProgress[project.id] || 0}%` }}
                        />
                      </div>
                    </div>

                    {/* Meta information */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-700 text-sm">
                        <Clock size={16} className="text-cyan-600" />
                        <span className="font-semibold">{project.duration} weeks</span>
                      </div>
                      <div
                        className={`flex items-center gap-2 px-3 py-1 rounded-lg border font-semibold text-sm ${
                          difficultyColors[project.difficulty]
                        }`}
                      >
                        <Zap size={14} />
                        <span>{project.difficulty}</span>
                        <span className="ml-0.5">{difficultyIcons[project.difficulty]}</span>
                      </div>
                    </div>

                    {/* Toggle expand button */}
                    <button
                      onClick={() =>
                        setExpandedProject(expandedProject === project.id ? null : project.id)
                      }
                      className="w-full mb-4 flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-700"
                    >
                      <span>{expandedProject === project.id ? "Hide Details" : "View Details"}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          expandedProject === project.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Expanded content */}
                    {expandedProject === project.id && (
                      <div className="border-t border-gray-300 pt-4 space-y-4">
                        {/* Progress slider */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Update Progress
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={projectProgress[project.id] || 0}
                            onChange={(e) =>
                              handleUpdateProgress(project.id, parseInt(e.target.value))
                            }
                            className="w-full"
                          />
                        </div>

                        {/* Notes section */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-semibold text-gray-700">
                              Project Notes
                            </label>
                            {!editingNotes[project.id] && (
                              <button
                                onClick={() =>
                                  setEditingNotes({
                                    ...editingNotes,
                                    [project.id]: true,
                              })
                                }
                                className="text-indigo-600 hover:text-indigo-700 text-xs font-semibold flex items-center gap-1"
                              >
                                <Edit size={14} /> Edit
                              </button>
                            )}
                          </div>
                          {editingNotes[project.id] ? (
                            <div className="space-y-2">
                              <textarea
                                value={projectNotes[project.id] || ""}
                                onChange={(e) =>
                                  handleUpdateNotes(project.id, e.target.value)
                                }
                                placeholder="Add notes about your progress, challenges, or learnings..."
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                rows={3}
                              />
                              <button
                                onClick={() =>
                                  setEditingNotes({
                                    ...editingNotes,
                                    [project.id]: false,
                                  })
                                }
                                className="text-indigo-600 hover:text-indigo-700 text-xs font-semibold flex items-center gap-1"
                              >
                                <Save size={14} /> Save
                              </button>
                            </div>
                          ) : (
                            <div className="bg-white rounded-lg p-3 border border-gray-300 min-h-[60px] text-sm text-gray-700">
                              {projectNotes[project.id] || (
                                <span className="text-gray-400 italic">No notes yet</span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Status selector */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Status
                          </label>
                          <select
                            value={project.status}
                            onChange={(e) =>
                              handleStatusChange(project.id, e.target.value as ProjectStatus)
                            }
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            <option value="planning">Planning</option>
                            <option value="in_progress">In Progress</option>
                            <option value="completed">Completed</option>
                            <option value="paused">Paused</option>
                          </select>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-2 pt-2 border-t border-gray-300">
                          <button
                            onClick={() => handleRemoveProject(project.id)}
                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 border border-red-200 rounded-lg transition-colors font-semibold"
                          >
                            <Trash2 size={14} />
                            Remove
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Suggested Projects Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-cyan-100 rounded-lg">
              <Sparkles className="text-cyan-600" size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Suggested Projects <span className="text-cyan-600">({mockAiData.projects.length})</span>
              </h2>
              <p className="text-sm text-gray-600 mt-1">AI-recommended projects aligned with your career path</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockAiData.projects.map((project, index) => {
              const isStarted = isProjectStarted(project.title);
              const details = getProjectDetails(project.title);

              return (
                <div
                  key={index}
                  className={`rounded-xl border-2 overflow-hidden transition-all duration-300 ${
                    isStarted
                      ? "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300 opacity-75 hover:opacity-85"
                      : "bg-white border-cyan-200 hover:border-cyan-400 hover:shadow-xl"
                  }`}
                >
                  <div className="p-6">
                    {/* Status badge */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        {isStarted ? (
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-600 text-white rounded-full text-xs font-bold mb-2">
                            <CheckCircle size={14} />
                            Started
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold mb-2">
                            <Sparkles size={14} />
                            Suggested
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Meta information */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <div className="flex items-center gap-1.5 text-gray-700 text-xs">
                        <Clock size={14} className="text-cyan-600" />
                        <span className="font-semibold">{project.duration}w</span>
                      </div>
                      <div
                        className={`flex items-center gap-1 px-2 py-1 rounded-lg border font-semibold text-xs ${
                          difficultyColors[project.difficulty]
                        }`}
                      >
                        <Zap size={12} />
                        <span>{project.difficulty}</span>
                        <span>{difficultyIcons[project.difficulty]}</span>
                      </div>
                    </div>

                    {/* Action button */}
                    {!isStarted ? (
                      <button
                        onClick={() =>
                          handleStartProject(
                            project.title,
                            project.description,
                            project.duration,
                            project.difficulty
                          )
                        }
                        className="w-full px-4 py-2.5 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:from-cyan-600 hover:to-blue-600"
                      >
                        <Plus size={18} />
                        Start Project
                      </button>
                    ) : (
                      <div className="bg-gray-100 text-gray-600 px-4 py-2.5 rounded-lg text-center font-semibold text-sm border border-gray-300">
                        In Your Projects
                      </div>
                    )}

                    {/* Quick status preview for started projects */}
                    {isStarted && details && (
                      <div className="mt-3 pt-3 border-t border-gray-300 text-xs text-gray-600">
                        <div className="flex items-center justify-between mb-1">
                          <span>Progress</span>
                          <span className="font-bold text-indigo-600">{projectProgress[details.id] || 0}%</span>
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="h-full bg-indigo-500"
                            style={{ width: `${projectProgress[details.id] || 0}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer spacing */}
        <div className="mt-16" />
      </div>
    </div>
  );
}
