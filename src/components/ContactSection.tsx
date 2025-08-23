import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contato" className="min-h-screen bg-white flex items-center">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-primary">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pronto para começar seu projeto? Fale conosco e receba um orçamento personalizado 
              sem compromisso.
            </p>
          </div>
          
          <div className="grid gap-12">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Solicite seu Orçamento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Seu nome"  className="bg-slate-100"/>
                    <Input placeholder="Telefone" className="bg-slate-100" />
                  </div>
                  <Textarea placeholder="Descreva seu projeto" className="min-h-[120px] bg-slate-100" />
                  <Button className="w-full text-white bg-primary hover:bg-primary/90">
                    Enviar Solicitação
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
    </section>
  );
}