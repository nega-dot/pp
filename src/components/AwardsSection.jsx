import { Award, Trophy, Star, Medal } from "lucide-react";

const awards = [
  {
    id: 1,
    title: "Best Developer Portfolio 2024",
    organization: "Tech Excellence Awards",
    year: "2024",
    description: "Recognized for outstanding web development portfolio design and user experience.",
    icon: Trophy,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  },
  {
    id: 2,
    title: "Innovation in Web Design",
    organization: "Digital Design Summit",
    year: "2023",
    description: "Awarded for creative use of modern web technologies and animations.",
    icon: Star,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    id: 3,
    title: "Outstanding Frontend Achievement",
    organization: "React Community",
    year: "2023",
    description: "Recognized for contributions to open-source React projects and community engagement.",
    icon: Award,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    id: 4,
    title: "Excellence in User Experience",
    organization: "UX Design Institute",
    year: "2022",
    description: "Honored for creating intuitive and accessible user interfaces.",
    icon: Medal,
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  }
];

export const AwardsSection = () => {
  return (
    <section id="awards" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Awards & <span className="text-primary">Honours</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Recognition for excellence in web development, design innovation, and community contributions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div
                key={award.id}
                className="group bg-card rounded-xl p-6 shadow-xs card-hover border border-border/50 hover:border-primary/30 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${award.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-6 w-6 ${award.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                        {award.title}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {award.year}
                      </span>
                    </div>
                    
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      {award.organization}
                    </p>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};