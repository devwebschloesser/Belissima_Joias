import {}from "react";
import Depoimentos from "../Components/Depoimentos";
import imgEstrelinhas from "../assets/estrelinhas-avaliacao.png"
import Localizacao from "../Components/Localizacao";

export default function DepoimentosPage() {
  const clientes = [
    {
      nome: "Ana Paula",
      comentario: "A qualidade das joias é impecável! Chegou rapidinho e com uma embalagem linda.",
      data: "Jun 2025",
    },
    {
      nome: "Marcos Vinícius",
      comentario: "Ótimo atendimento e preço justo. A peça em 18k brilhou muito mais do que eu esperava.",
      data: "Mai 2025",
    },
    {
      nome: "Beatriz Souza",
      comentario: "Comprei um presente e foi sucesso! O suporte tirou todas as minhas dúvidas.",
      data: "Abr 2025",
    },
  ];

  return (
    <>
    <Depoimentos
      clientes={clientes}
      starSrc={imgEstrelinhas}
      titulo="O que nossos clientes dizem sobre a loja"
      subtitulo="Beleza, qualidade e atendimento que encantam"
    />
    <Localizacao/>
    </>
  );
}
