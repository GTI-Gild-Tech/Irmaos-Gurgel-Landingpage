import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import logoImage from "../assets/Ativo_6_2x-removebg-preview.png";
import companyNameImage from "../assets/Ativo_7_2x-removebg-preview.png";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
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
         <a
  href="https://wa.me/5574988472791"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline-flex"
>
  Orçamento Grátis
</a>

<a
  href="https://wa.me/5574988472791"
  target="_blank"
  rel="noopener noreferrer"
  className="md:hidden"
  aria-label="Abrir menu"
>
  <Menu className="h-5 w-5" />
</a>
        </div>
      </div>
    </header>
  );
}