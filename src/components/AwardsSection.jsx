import { Award, Trophy, Star, Medal, Sparkles } from "lucide-react";

const awards = [
  {
    id: 1,
    title: "Best Developer Portfolio 2024",
    organization: "Tech Excellence Awards",
    year: "2024",
    description: "Recognized for outstanding web development portfolio design and user experience.",
    icon: Trophy,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30"
  },
  {
    id: 2,
    title: "Innovation in Web Design",
    organization: "Digital Design Summit",
    year: "2023",
    description: "Awarded for creative use of modern web technologies and animations.",
    icon: Star,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30"
  },
  {
    id: 3,
    title: "Outstanding Frontend Achievement",
    organization: "React Community",
    year: "2023",
    description: "Recognized for contributions to open-source React projects and community engagement.",
    icon: Award,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30"
  },
  {
    id: 4,
    title: "Excellence in User Experience",
    organization: "UX Design Institute",
    year: "2022",
    description: "Honored for creating intuitive and accessible user interfaces.",
    icon: Medal,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30"
  }
];

export const AwardsSection = () => {
  return (
    <section id="awards" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Awards & <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Honours</span>
            </h2>
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          </div>
          
          <p className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Recognition for excellence in web development, design innovation, and community contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div
                key={award.id}
                className={`group bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl border ${award.borderColor} hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] animate-fade-in relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 ${award.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}></div>
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className={`p-3 rounded-full ${award.bgColor} group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    <IconComponent className={`h-6 w-6 ${award.color} group-hover:animate-pulse`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 leading-tight">
                        {award.title}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                        {award.year}
                      </span>
                    </div>
                    
                    <p className="text-sm font-medium text-muted-foreground mb-3 group-hover:text-foreground/80 transition-colors duration-300">
                      {award.organization}
                    </p>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                      {award.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};