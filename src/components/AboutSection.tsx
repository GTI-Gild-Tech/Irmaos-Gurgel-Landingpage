import image_21a19e05cd32951311c7e3d6f65de1526e280a60 from "../assets/Ativo 4@2x.png";
import image_2fe295d6d900c02930ed96ab52a2b92a0ee05c84 from "../assets/Ativo 1@2x.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, Clock, ThumbsUp, Wrench } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">
                Tradição e inovação em cada projeto
              </h2>
              <p className="text-gray-600">
                A Construtora Irmãos Gurgel nasceu da paixão pela construção e do sonho de uma famílias 
                em oferecer qualidade excepcional em cada obra. Fundada pela família Gurgel, 
                nossa empresa cresceu mantendo os valores familiares de honestidade, dedicação e excelência.
              </p>
              <p className="text-gray-600">
                Combinamos técnicas tradicionais comprovadas com as mais modernas tecnologias do mercado, 
                garantindo que cada projeto seja executado com precisão, dentro do prazo e orçamento estabelecido.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Qualidade Garantida</h3>
                <p className="text-sm text-gray-600">Materiais selecionados e mão de obra especializada</p>
              </div>
              
              <div className="space-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Prazo Cumprido</h3>
                <p className="text-sm text-gray-600">Planejamento rigoroso e execução pontual</p>
              </div>
              
              <div className="space-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ThumbsUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Satisfação Total</h3>
                <p className="text-sm text-gray-600">Atendimento especializado do início até o final</p>
              </div>
              
              <div className="space-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Suporte Técnico</h3>
                <p className="text-sm text-gray-600">Assistência completa pós-entrega</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src={image_2fe295d6d900c02930ed96ab52a2b92a0ee05c84}
                alt="Equipe Irmãos Gurgel"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src={image_21a19e05cd32951311c7e3d6f65de1526e280a60}
                alt="Canteiro de obras"
                className="w-full h-[200px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}