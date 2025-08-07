
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Per user: order is Backend, DevOps & Tools, Frontend
const skillCategories = [
  {
    category: "Backend",
    skills: [
      "Go",
      "Ruby",
      "Ruby on Rails",
      "Python",
      "Java",
      "Node.js",
      "Express",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "RESTful APIs",
      "PHP",
      "Laravel"
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Git",
      "Docker",
      "Google Cloud Platform",
      "CI/CD",
      "Azure",
      "Grafana",
      "JIRA",
      "Confluence",
      "Kubernetes",
      "CircleCI",
      "Prometheus",
      "OpsGenie",
      "Gitlab"
    ]
  },
  {
    category: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Next.js"
    ]
  }
];

// Revert to background hints
const sectionColors = [
  "bg-primary/5",    // Backend
  "bg-orange-50",    // DevOps & Tools (orange hint)
  "bg-blue-50"       // Frontend (blue hint)
];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className={sectionColors[index]}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
