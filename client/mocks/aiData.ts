/**
 * Mock AI-generated career guidance data
 * This structure matches the AI output format required for the Results page
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

export const mockAiData: AiAnalysisData = {
  summary:
    "Based on your assessment results, you're a natural problem-solver with strong analytical abilities. You demonstrate exceptional curiosity and a passion for understanding how systems work. Your profile suggests a career in technology, particularly in AI/ML development, where you can leverage your investigative nature and technical aptitude to create innovative solutions. You have the potential to become a full-stack AI engineer or data scientist.",
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
      title: "AI/ML Engineer",
      reason:
        "Your strong investigative and analytical scores make you perfect for developing intelligent systems",
      tags: ["High Demand", "Global Opportunity", "$150K+ Salary"],
    },
    {
      title: "Data Scientist",
      reason:
        "Transform complex data into actionable insights using your problem-solving skills",
      tags: ["Growth Field", "Remote Work", "Analytics"],
    },
    {
      title: "Full-Stack Developer",
      reason:
        "Build end-to-end applications combining your technical and creative abilities",
      tags: ["Versatile", "High Demand", "Creative"],
    },
    {
      title: "Cybersecurity Specialist",
      reason:
        "Protect systems and solve security challenges using your analytical mind",
      tags: ["Critical Role", "Security Focus", "Leadership"],
    },
  ],
  industries: [
    {
      name: "Technology & Software",
      reason:
        "Align perfectly with your technical skills and innovation mindset. Companies like Google, Microsoft, and startups are actively hiring",
    },
    {
      name: "Artificial Intelligence & ML",
      reason:
        "Your investigative nature and curiosity about how systems work make this an ideal fit for emerging AI applications",
    },
    {
      name: "EdTech",
      reason:
        "Combine technology with social impact. Build tools that help students learn better, just like you've helped yourself",
    },
    {
      name: "FinTech",
      reason:
        "Use your analytical abilities to solve financial problems with innovative technology solutions",
    },
  ],
  projects: [
    {
      title: "Smart Learning Assistant",
      description:
        "Build an AI chatbot that helps students with personalized learning paths using NLP and machine learning",
      duration: 8,
      difficulty: "Medium",
    },
    {
      title: "Predictive Career Matcher",
      description:
        "Create a system that matches students with career paths based on their skills, interests, and market demand",
      duration: 12,
      difficulty: "Hard",
    },
    {
      title: "Data Dashboard Analytics Platform",
      description:
        "Develop a web application that visualizes complex educational data and provides actionable insights",
      duration: 6,
      difficulty: "Medium",
    },
    {
      title: "Computer Vision Project: Resume Scanner",
      description:
        "Build an application that automatically extracts information from resumes using computer vision and OCR",
      duration: 10,
      difficulty: "Hard",
    },
    {
      title: "Cybersecurity: Network Monitor",
      description:
        "Create a system to monitor network traffic and identify potential security threats in real-time",
      duration: 7,
      difficulty: "Medium",
    },
  ],
  local_opportunities: [
    {
      title: "Addis Innovation Hub",
      location: "Addis Ababa, Ethiopia",
    },
    {
      title: "Nairobi Tech Incubator",
      location: "Nairobi, Kenya",
    },
    {
      title: "Lagos Tech Ecosystem",
      location: "Lagos, Nigeria",
    },
    {
      title: "Cairo AI & Robotics Center",
      location: "Cairo, Egypt",
    },
  ],
  communities: [
    {
      name: "NASA Space Apps Challenge",
      description:
        "Global hackathon solving real-world problems using space technology and open data",
    },
    {
      name: "Google Developer Student Clubs",
      description:
        "Connect with peers, learn from industry experts, and build projects that matter",
    },
    {
      name: "Africa AI Academy",
      description:
        "Specialized program for African youth to master AI/ML with local mentorship",
    },
    {
      name: "Black in AI Community",
      description:
        "Supportive network for underrepresented groups in artificial intelligence",
    },
    {
      name: "Women in Tech Africa",
      description:
        "Empowering women to pursue careers in technology with mentorship and opportunities",
    },
  ],
};
