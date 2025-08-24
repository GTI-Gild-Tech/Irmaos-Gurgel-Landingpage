import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";
import User1 from "../assets/user1.jpeg";
import User2 from "../assets/user2.jpeg";
import User3 from "../assets/user3.jpeg";


const testimonials = [
  {
    name: "Maria Silva",
    role: "Proprietária",
    image: User1,
    content: "Excelente trabalho! A Irmãos Gurgel construiu nossa casa dos sonhos com qualidade excepcional e dentro do prazo. Super recomendo!",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Empresário",
    image: User2,
    content: "Profissionais competentes e honestos. Nossa reforma ficou perfeita e o atendimento foi impecável do início ao fim.",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Arquiteta",
    image: User3,
    content: "Trabalho já com eles há anos. Sempre entregam projetos de alta qualidade e cumprem todos os prazos estabelecidos.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-primary">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre nosso trabalho.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6 space-y-4">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                
                <div className="flex flex-col items-center space-y-2">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}