import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Residência Moderna - Alphaville",
    type: "Residencial",
    area: "350m²",
    description: "Casa moderna com design contemporâneo e acabamentos de luxo."
  },
  {
    image: "https://images.unsplash.com/photo-1707598973296-255b29445512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTU3MzAxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Escritório Corporativo Premium",
    type: "Comercial",
    area: "100m²",
    description: "Espaço de trabalho moderno com design sofisticado e infraestrutura completa."
  },
  {
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Condomínio Residencial",
    type: "Residencial",
    area: "250m²",
    description: "Condomínio com 24 unidades e área de lazer completa."
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Reforma Residencial",
    type: "Reforma",
    area: "180m²",
    description: "Reforma completa com modernização de todos os ambientes."
  }
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-primary">
            Projetos Realizados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos principais projetos e veja a qualidade 
            que entregamos em cada obra.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{project.type}</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.area}</span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
}