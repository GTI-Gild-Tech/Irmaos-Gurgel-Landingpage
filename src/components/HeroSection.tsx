import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Award, Users, Calendar } from "lucide-react";
import heroImage from "../assets/hero.png";

export function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url('${heroImage}')`
      }}
    >
      {/* Overlay escuro para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Construindo seus <span className="text-blue-400">sonhos</span> com qualidade e tradição
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Há mais de 10 anos no mercado, a Construtora Irmãos Gurgel é referência em construção civil, 
              oferecendo soluções completas desde projetos residenciais até grandes empreendimentos comerciais.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className=" cursor-pointer px-8 bg-primary text-white hover:bg-primary/90">
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 border-white text-[rgba(42,68,127,1)] hover:bg-white bg-white hover:text-primary">
              Ver Projetos
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex justify-center mb-3">
                <Calendar className="h-10 w-10 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-gray-200">Anos de experiência</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex justify-center mb-3">
                <Users className="h-10 w-10 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-gray-200">Clientes satisfeitos</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex justify-center mb-3">
                <Award className="h-10 w-10 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-gray-200">Obras entregues</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}