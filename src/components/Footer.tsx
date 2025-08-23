import { Instagram, Phone } from "lucide-react";
import logoImage from "../assets/LOGO BRNACO.png";
import companyNameImage from "../assets/LOGO BRANCO 2.png";

export function Footer() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5574988472791', '_blank');
  }
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/irmaos_gurgel/', '_blank');
  };
  return (
    <footer className="bg-[rgba(34,36,51,1)] text-white py-12 ">
      <div className="container max-w-6xl  px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="Logo Irmãos Gurgel" 
                className="w-8"
              />
              <img 
                src={companyNameImage} 
                alt="Irmãos Gurgel Construções e Empreendimentos" 
                className="h-6"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Construindo sonhos com qualidade e tradição.
            </p>
            <div onClick={handleInstagramClick} className="flex space-x-4">            
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <p className="text-gray-400 text-sm">Siga nos no instagram</p>
            </div>
            <div onClick={handleWhatsAppClick} className="flex space-x-4">            
              <Phone className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <p className="text-gray-400 text-sm">Converse no whatsapp</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-400 flex flex-col gap-2">
              <li><a href="#" className="hover:text-white transition-colors">Construção Residencial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Construção Comercial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reformas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Acabamentos</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400 flex flex-col gap-2">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#projetos" className="hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreira</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Orçamento</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400 flex flex-col gap-2">
              <li>(74) 98847-2791</li>
              <li>@irmaos_gurgel</li>
              <li>Rua Juvêncio Alves, Centro, Juazeiro-BA CEP: 48903-480</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            Feito por <a href="https://www.gildtechinformation.com/" className="hover:text-white transition-colors">GTI</a> © 2025. 
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}