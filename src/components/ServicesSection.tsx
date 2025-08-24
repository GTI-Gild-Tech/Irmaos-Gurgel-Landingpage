import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Home, Building2, Hammer, PaintBucket, Zap, Droplets } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Home,
    title: "Construção Residencial",
    description: "Casas, sobrados e residências personalizadas com acabamento de qualidade superior."
  },
  {
    icon: Building2,
    title: "Construção Comercial",
    description: "Prédios comerciais, galpões industriais e estabelecimentos empresariais."
  },
  {
    icon: Hammer,
    title: "Reformas e Ampliações",
    description: "Reformas completas, ampliações e modernização de imóveis existentes."
  },
  {
    icon: PaintBucket,
    title: "Acabamentos",
    description: "Pintura, revestimentos, pisos e todos os detalhes de acabamento fino."
  },
  {
    icon: Zap,
    title: "Instalações Elétricas",
    description: "Projeto e execução de instalações elétricas residenciais e comerciais."
  },
  {
    icon: Droplets,
    title: "Instalações Hidráulicas",
    description: "Sistemas hidráulicos completos incluindo água, esgoto e drenagem."
  }
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-primary">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em construção civil, desde o projeto até a entrega final,
            sempre com a qualidade que você merece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center pt-10">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white"
            asChild
          >
            <a
              href="https://wa.me/5574988472791?text=Olá,%20gostaria%20de%20saber%20mais"
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba Mais
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}