
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Main experiences remain
const experiences = [
  {
    title: "Software Engineer",
    company: "Boon, US",
    period: "April 2025 - Present",
    description: [
      "Building the first unified AI agentic platform for commercial transportation companies.",
      "Empowering the logistics and supply chain workforce to win more business and become more efficient.",
      "Developing AI agent platform for Supply Chain and Logistics."
    ],
    website: "https://www.getboon.ai/"
  },
  {
    title: "Software Development Engineer, Backend",
    company: "Govtech Edu, Indonesia",
    period: "July 2022 - February 2025",
    description: [
      "Maintain Rapor Pendidikan platform that manage province, city, and school educational scores.",
      "Design database for city and province problem indicators.",
      "Provide access for school, city, and province users to access the platform.",
      "Collaborate with other functions to get the requirement details and acceptance criteria of the tasks.",
      "Regularly meet with stakeholders to discuss the progress, problem, and the solution of the tasks."
    ],
    website: "https://www.govtechedu.id/"
  },
  {
    title: "Senior Software Engineer",
    company: "Bukalapak, Indonesia",
    period: "February 2019 - July 2022",
    description: [
      "Handled microservice migration from using GCP to use Azure.",
      "Communicated with stakeholders to get the requirement details.",
      "Helped engineering manager to host one on one session with fellow engineers.",
      "Encouraged techincal best practices for other engineers.",
      "Explored new 3rd party API like whatsapp to integrate with complaint feature.",
      "Read team metrics and get the insights from there to improve the performance."
    ],
    website: "https://www.bukalapak.com/"
  },
  {
    title: "Medior Software Engineer",
    company: "Bukalapak, Indonesia",
    period: "January 2018 - February 2019",
    description: [
      "Led a new squad with a new scope, customer satisfaction management.",
      "Built complaint problem prediction feature from database design to API development.",
      "Periodically deployed the main service of Bukalapak.",
      "Maintained several services related to customer satisfaction."
    ],
    website: "https://www.bukalapak.com/"
  },
  {
    title: "Junior Software Engineer",
    company: "Bukalapak, Indonesia",
    period: "February 2016 - January 2018",
    description: [
      "Improved performance of product upload by integrating Instagram API to Bukalapak.",
      "Developed feature for purchasing mobile data voucher and game voucher.",
      "Led a squad to create train ticket purchase feature by integrating 3rd party API from KAI.",
      "Improved and maintained mutual funds and gold purchase feature."
    ],
    website: "https://www.bukalapak.com/"
  },
  {
    title: "Intern Software Engineer",
    company: "Sirclo, Indonesia",
    period: "June 2014 - July 2014",
    description: [
      "Learnt how Sirclo as e-commerce solution helps UKM in Indonesia.",
      "Integrated Instagram API to Sirclo for store integration.",
      "Implemented password encryption in registration system at Sirclo.",
      "Improved product upload feature in Sirclo and fixed several bugs in it."
    ],
    website: "https://www.sirclo.com/"
  }
];

// Education (new section)
const education = {
  institution: "Institut Teknologi Bandung, Indonesia",
  period: "2011 - 2015",
  title: "Bachelor of Engineering (Computer Science)"
};

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="relative border-l-4 border-l-primary bg-white/95"
            >
              <CardHeader>
                <CardTitle className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <span>{exp.title}</span>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </CardTitle>
                <p className="text-md font-medium text-primary">
                  <a 
                    href={exp.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    {exp.company}
                  </a>
                </p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
          {/* Education section with "Education" subtitle */}
          <div className="mt-12 mb-4 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">Education</h3>
          </div>
          <Card className="relative border-l-4 border-l-primary bg-white/95 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <span>{education.institution}</span>
                <span className="text-sm text-muted-foreground">{education.period}</span>
              </CardTitle>
              <p className="text-md font-medium text-primary">{education.title}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Undergraduate degree completed at one of Indonesia&apos;s leading technology institutes.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
