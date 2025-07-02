import { Shield, CheckCircle, ExternalLink, Calendar, Award } from "lucide-react";

const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-SA-2024-001",
    description: "Comprehensive certification covering cloud architecture, security, and scalability best practices.",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
    verifyUrl: "#",
    logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    color: "from-orange-500 to-yellow-500",
    borderColor: "border-orange-500/30"
  },
  {
    id: 2,
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-DEV-2023-456",
    description: "Advanced certification in cloud-native application development and deployment strategies.",
    skills: ["GCP Services", "Kubernetes", "CI/CD", "Microservices"],
    verifyUrl: "#",
    logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    color: "from-blue-500 to-green-500",
    borderColor: "border-blue-500/30"
  },
  {
    id: 3,
    name: "Meta Frontend Developer Professional",
    issuer: "Meta (Facebook)",
    date: "2023",
    credentialId: "META-FE-2023-789",
    description: "Comprehensive program covering React, advanced JavaScript, and modern frontend development practices.",
    skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
    verifyUrl: "#",
    logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    color: "from-blue-600 to-purple-600",
    borderColor: "border-blue-600/30"
  },
  {
    id: 4,
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2022",
    credentialId: "MONGO-DEV-2022-123",
    description: "Expertise in MongoDB database design, optimization, and application development.",
    skills: ["MongoDB", "Database Design", "Aggregation", "Performance"],
    verifyUrl: "#",
    logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    color: "from-green-600 to-teal-600",
    borderColor: "border-green-600/30"
  },
  {
    id: 5,
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-2022-567",
    description: "Hands-on certification demonstrating skills in Kubernetes cluster administration and management.",
    skills: ["Kubernetes", "Container Orchestration", "DevOps", "Linux"],
    verifyUrl: "#",
    logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    color: "from-purple-600 to-pink-600",
    borderColor: "border-purple-600/30"
  },
  {
    id: 6,
    name: "Certified Ethical Hacker",
    issuer: "EC-Council",
    date: "2021",
    credentialId: "CEH-2021-890",
    description: "Comprehensive certification in cybersecurity, penetration testing, and ethical hacking methodologies.",
    skills: ["Cybersecurity", "Penetration Testing", "Network Security", "Risk Assessment"],
    verifyUrl: "#",
    logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    color: "from-red-600 to-orange-600",
    borderColor: "border-red-600/30"
  }
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Professional <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Certifications</span>
            </h2>
          </div>
          
          <p className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Industry-recognized certifications that validate my expertise in modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`group bg-card/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border ${cert.borderColor} hover:border-primary/50 transition-all duration-500 animate-fade-in hover:scale-[1.02] relative`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Header with gradient */}
              <div className={`h-3 bg-gradient-to-r ${cert.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </div>
              
              <div className="p-6 relative">
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-b-xl`}></div>
                
                <div className="relative z-10">
                  {/* Logo and basic info */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative group/logo">
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-12 h-12 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300 shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-lg group-hover/logo:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300 leading-tight mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="w-3 h-3 text-primary" />
                        <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium bg-secondary/70 text-secondary-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:scale-105 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-muted-foreground">
                        ID: {cert.credentialId}
                      </span>
                    </div>
                    
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-all duration-200 group/link hover:scale-105 bg-primary/10 px-2 py-1 rounded-full hover:bg-primary/20"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};