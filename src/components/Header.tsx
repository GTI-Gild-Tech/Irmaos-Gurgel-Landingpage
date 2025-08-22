import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import logoImage from "../assets/WhatsApp-Image-2024-02-26-at-06.32.43.webp";
import companyNameImage from "../assets/WhatsApp-Image-2024-02-26-at-06.32.43.webp";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={logoImage} 
            alt="Logo Irmãos Gurgel" 
            className="w-12 h-12"
          />
          <img 
            src={companyNameImage} 
            alt="Irmãos Gurgel Construções e Empreendimentos" 
            className="h-8"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-gray-700 hover:text-primary transition-colors">Início</a>
          <a href="#sobre" className="text-gray-700 hover:text-primary transition-colors">Sobre</a>
          <a href="#servicos" className="text-gray-700 hover:text-primary transition-colors">Serviços</a>
          <a href="#projetos" className="text-gray-700 hover:text-primary transition-colors">Projetos</a>
          <a href="#contato" className="text-gray-700 hover:text-primary transition-colors">Contato</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Orçamento Grátis
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}