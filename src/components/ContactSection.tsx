import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import React, { useState } from 'react';

// Assumindo que você tem os seus componentes Card, Button, Input, Textarea
// import { Card, CardHeader, CardTitle, CardContent } from './Card';
// import { Button } from './Button';
// import { Input } from './Input';
// import { Textarea } from './Textarea';

export function ContactSection() {
  // 1. Definição dos estados para os inputs
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [descricao, setDescricao] = useState('');

  // 2. Função que lida com o clique do botão
  const handleEnviarSolicitacao = () => {
    const mensagem = `
      Olá, gostaria de um orçamento!
      Nome: ${nome}
      Telefone: ${telefone}
      Descrição do projeto: ${descricao}
    `;
    const mensagemCodificada = encodeURIComponent(mensagem);
    const urlWhatsapp = `https://wa.me/5574988472791?text=${mensagemCodificada}`;

    window.open(urlWhatsapp, '_blank');
  };

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
                  <Input
                    placeholder="Seu nome"
                    className="bg-slate-100"
                    // 3. Vinculando o input ao estado e ao evento de mudança
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                  <Input
                    placeholder="Telefone"
                    className="bg-slate-100"
                    // 3. Vinculando o input ao estado e ao evento de mudança
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </div>
                <Textarea
                  placeholder="Descreva seu projeto"
                  className="min-h-[120px] bg-slate-100"
                  // 3. Vinculando o input ao estado e ao evento de mudança
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
                <Button
                  className="w-full text-white bg-primary hover:bg-primary/90"
                  // 4. Adicionando o evento de clique ao botão
                  onClick={handleEnviarSolicitacao}
                >
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