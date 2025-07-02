import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Master of Computer Science",
    institution: "University of British Columbia",
    location: "Vancouver, BC",
    period: "2020 - 2022",
    gpa: "3.9/4.0",
    description: "Specialized in Human-Computer Interaction and Web Technologies. Thesis on 'Modern Web Application Performance Optimization'.",
    achievements: [
      "Dean's List for Academic Excellence",
      "Graduate Research Assistant",
      "Published 2 papers on web performance"
    ],
    color: "border-l-blue-500"
  },
  {
    id: 2,
    degree: "Bachelor of Software Engineering",
    institution: "Simon Fraser University",
    location: "Burnaby, BC",
    period: "2016 - 2020",
    gpa: "3.8/4.0",
    description: "Comprehensive program covering software development, algorithms, and system design with focus on web technologies.",
    achievements: [
      "Summa Cum Laude",
      "President of Computer Science Society",
      "Winner of Annual Hackathon 2019"
    ],
    color: "border-l-purple-500"
  },
  {
    id: 3,
    degree: "High School Diploma",
    institution: "Vancouver Technical Secondary",
    location: "Vancouver, BC",
    period: "2012 - 2016",
    gpa: "95%",
    description: "Focused on Mathematics, Physics, and Computer Science. Early introduction to programming and web development.",
    achievements: [
      "Valedictorian",
      "Computer Science Award",
      "Mathematics Excellence Award"
    ],
    color: "border-l-green-500"
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Education</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Academic journey that shaped my technical expertise and passion for web development.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative flex flex-col md:flex-row gap-6 group animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                
                {/* Content card */}
                <div className={`md:ml-16 bg-card rounded-xl p-6 shadow-xs card-hover border-l-4 ${edu.color} hover:shadow-xl transition-all duration-500`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center gap-2 text-sm font-medium text-primary">
                          <GraduationCap className="h-4 w-4" />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>Key Achievements:</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="hover:text-foreground transition-colors duration-200">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};