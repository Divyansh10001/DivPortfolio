import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "CivicTrack (2nd-Runner-Up)",
      role: "UI/UX & Figma",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Golf Club Website",
      role: "Web Developer (HTML/JS/CSS)",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "BLW Internship Project",
      role: "Frontend Engineer (HTML/CSS)",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop",
    }
  ];

  return (
    <section className="min-h-screen bg-[#121212] py-24 px-8 md:px-24 relative z-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16">
          Selected Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 flex justify-between items-end">
                <div>
                  <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-1">
                    {project.role}
                  </p>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors group-hover:bg-orange-500">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
