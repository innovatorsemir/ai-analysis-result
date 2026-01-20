/**
 * Mock AI-generated career guidance data
 * This structure matches the AI output format required for the Results page
 * Now supports all career fields and disciplines
 */

export interface AiAnalysisData {
  summary: string;
  riasec: Array<{
    type: string;
    score: number;
  }>;
  career_paths: Array<{
    title: string;
    reason: string;
    tags: string[];
  }>;
  industries: Array<{
    name: string;
    reason: string;
  }>;
  projects: Array<{
    title: string;
    description: string;
    duration: number; // in weeks
    difficulty: "Easy" | "Medium" | "Hard";
  }>;
  local_opportunities: Array<{
    title: string;
    location: string;
  }>;
  communities: Array<{
    name: string;
    description: string;
  }>;
}

export type ProjectStatus = "planning" | "in_progress" | "completed" | "paused";

export interface ActiveProject {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  startDate: string;
  duration: number;
  difficulty: "Easy" | "Medium" | "Hard";
}

export const mockAiData: AiAnalysisData = {
  summary:
    "Based on your assessment results, you're a natural problem-solver with strong analytical and creative abilities. Your profile demonstrates a well-rounded skill set that opens doors to diverse career opportunities across multiple fields. You have the potential to thrive in roles that combine your investigative nature with your ability to work with people and express yourself creatively. Consider careers that align with your values and allow you to make a meaningful impact.",
  riasec: [
    { type: "Realistic", score: 75 },
    { type: "Investigative", score: 92 },
    { type: "Artistic", score: 55 },
    { type: "Social", score: 68 },
    { type: "Enterprising", score: 70 },
    { type: "Conventional", score: 65 },
  ],
  career_paths: [
    {
      title: "Research Scientist",
      reason:
        "Your strong investigative and analytical scores make you ideal for research-focused roles in any field",
      tags: ["High Impact", "Continuous Learning", "Specialized"],
    },
    {
      title: "Healthcare Professional",
      reason:
        "Combine your analytical abilities with social skills to help others in medical, psychology, or therapeutic fields",
      tags: ["Growing Demand", "Community Impact", "Stable Career"],
    },
    {
      title: "Environmental Consultant",
      reason:
        "Apply your problem-solving skills to solve real-world environmental challenges with a realistic and investigative approach",
      tags: ["Sustainability", "Field Work", "Leadership"],
    },
    {
      title: "Business Analyst / Strategist",
      reason:
        "Use your analytical mind and social skills to drive organizational growth and improve operations",
      tags: ["High Demand", "Versatile", "Leadership Path"],
    },
    {
      title: "Creative Professional",
      reason:
        "Combine your artistic abilities with your analytical skills in design, writing, marketing, or content creation",
      tags: ["Expressive", "Growing Field", "Remote Opportunities"],
    },
    {
      title: "Educator / Trainer",
      reason:
        "Leverage your social skills and problem-solving abilities to educate and inspire the next generation",
      tags: ["Community Impact", "Flexible", "Meaningful Work"],
    },
  ],
  industries: [
    {
      name: "Healthcare & Medicine",
      reason:
        "Combine investigative research with social impact. Growing field with diverse specializations from clinical practice to public health",
    },
    {
      name: "Education",
      reason:
        "Your social and enterprising qualities make you effective in teaching, curriculum development, or educational leadership",
    },
    {
      name: "Environmental & Sustainability",
      reason:
        "Apply your realistic and investigative nature to solve environmental challenges and create sustainable solutions",
    },
    {
      name: "Business & Finance",
      reason:
        "Use your analytical and enterprising abilities to drive strategy, consulting, or corporate leadership",
    },
    {
      name: "Arts & Creative Industries",
      reason:
        "Channel your artistic side into design, entertainment, media, or cultural management",
    },
    {
      name: "Government & Public Service",
      reason:
        "Apply your social and enterprising skills to public policy, administration, or community development",
    },
  ],
  projects: [
    {
      title: "Community Health Initiative",
      description:
        "Design and implement a health awareness program for your local community addressing a specific health challenge",
      duration: 8,
      difficulty: "Medium",
    },
    {
      title: "Environmental Impact Assessment",
      description:
        "Research and document environmental issues in your area and propose sustainable solutions",
      duration: 12,
      difficulty: "Hard",
    },
    {
      title: "Educational Content Creation",
      description:
        "Develop educational materials or training modules in your area of expertise for diverse audiences",
      duration: 6,
      difficulty: "Medium",
    },
    {
      title: "Business Plan Development",
      description:
        "Create a comprehensive business plan for a social enterprise or sustainable business concept",
      duration: 10,
      difficulty: "Hard",
    },
    {
      title: "Creative Portfolio Project",
      description:
        "Build a portfolio showcasing your creative work in design, writing, visual arts, or multimedia",
      duration: 7,
      difficulty: "Medium",
    },
    {
      title: "Research Paper or Investigation",
      description:
        "Conduct in-depth research on a topic of interest and compile your findings in a professional format",
      duration: 9,
      difficulty: "Medium",
    },
  ],
  local_opportunities: [
    {
      title: "Addis Innovation Hub",
      location: "Addis Ababa, Ethiopia",
    },
    {
      title: "Nairobi Tech & Business Incubator",
      location: "Nairobi, Kenya",
    },
    {
      title: "Lagos Creative & Business Ecosystem",
      location: "Lagos, Nigeria",
    },
    {
      title: "Cairo Research & Development Center",
      location: "Cairo, Egypt",
    },
    {
      title: "Kigali Youth Development Programs",
      location: "Kigali, Rwanda",
    },
  ],
  communities: [
    {
      name: "Global Youth Leaders Initiative",
      description:
        "Connect with young professionals and entrepreneurs making impact across diverse fields worldwide",
    },
    {
      name: "Professional Development Networks",
      description:
        "Industry-specific groups connecting you with mentors and peers in your field of interest",
    },
    {
      name: "Africa Impact Academy",
      description:
        "Specialized program for African youth pursuing careers with social and environmental impact",
    },
    {
      name: "Diversity & Inclusion Communities",
      description:
        "Supportive networks for underrepresented groups in your chosen field",
    },
    {
      name: "Skills Development & Mentorship",
      description:
        "Access mentorship and training programs to develop professional skills for your career path",
    },
    {
      name: "Online Learning Communities",
      description:
        "Join global communities on platforms like Coursera, LinkedIn, and industry-specific forums",
    },
  ],
};
