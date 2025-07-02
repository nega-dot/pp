import { GraduationCap, Calendar, MapPin, BookOpen, Star } from "lucide-react";

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
    color: "border-l-blue-500",
    bgGradient: "from-blue-500/10 to-transparent"
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
    color: "border-l-purple-500",
    bgGradient: "from-purple-500/10 to-transparent"
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
    color: "border-l-green-500",
    bgGradient: "from-green-500/10 to-transparent"
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold">
              My <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Education</span>
            </h2>
          </div>
          
          <p className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Academic journey that shaped my technical expertise and passion for web development.
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block rounded-full shadow-lg shadow-primary/20"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative flex flex-col md:flex-row gap-6 group animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Enhanced Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-6 h-6 bg-gradient-to-r from-primary to-primary/80 rounded-full border-4 border-background shadow-xl shadow-primary/30 group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-primary/40 transition-all duration-300 z-10">
                  <div className="absolute inset-1 bg-primary/20 rounded-full animate-ping"></div>
                </div>
                
                {/* Enhanced Content card */}
                <div className={`md:ml-16 bg-gradient-to-r ${edu.bgGradient} bg-card/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl border-l-4 ${edu.color} hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group`}>
                  {/* Background shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                          {edu.institution}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:items-end gap-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        {edu.gpa && (
                          <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                            <Star className="h-4 w-4" />
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {edu.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span>Key Achievements:</span>
                      </div>
                      <div className="grid gap-2">
                        {edu.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group/achievement">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover/achievement:scale-125 transition-transform duration-200"></div>
                            <span className="group-hover/achievement:translate-x-1 transition-transform duration-200">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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