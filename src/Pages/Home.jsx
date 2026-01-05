import {} from "react";
import Logo from "../Components/logo";
import JoiasDescricao from "../Components/joiasDescricao";
import { ContainerJoias, MensagemDestaque } from "../Styles/styled";
import { useCarrinho } from "../Context/CarrinhoContext";
import { useNavigate } from "react-router-dom";
import DepoimentosPage from "./DepoimentosPage";

const joiasDisponivel = [
  {
    id: 1,
    nome: "Brinco",
    imagem: "/brincoCoracaoAzul.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 399.99,
    descricao: "",
  },
  {
    id: 2,
    nome: "Brinco",
    imagem: "/brincoCoracaoPedrasVerdes.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 399.99,
    descricao: "",
  },
  {
    id: 3,
    nome: "Brinco",
    imagem: "/brincoCoracaoComDiamante.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 399.99,
    descricao: "",
  },
  {
    id: 4,
    nome: "Brinco",
    imagem: "/brincoCoracaoVermelho.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 399.99,
    descricao: "",
  },
  {
    id: 5,
    nome: "Brinco",
    imagem: "/brincoOuroCoracaoRosa.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 399.99,
    descricao: "",
  },
  {
    id: 6,
    nome: "Brinco",
    imagem: "/brincoDiamanteVinho.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 399.99,
    descricao: "",
  },
  {
    id: 7,
    nome: "Brinco",
    imagem: "/brincoOuroEstrelas.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 399.99,
    descricao: "",
  },
  {
    id: 8,
    nome: "Brinco",
    imagem: "/brincoCoracaoPrata.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 499.99,
    descricao: "",
  },
  {
    id: 9,
    nome: "Brinco",
    imagem: "/brincoEstrelaRosa.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 299.99,
    descricao: "",
  },
  {
    id: 10,
    nome: "Brinco",
    imagem: "/brincoEstrelaAzul.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 299.99,
    descricao: "",
  },
   {
    id: 16,
    nome: "Brinco",
    imagem: "/brincoCoracaoPreto.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 299.99,
    descricao: "",
  },
   {
    id: 17,
    nome: "Brinco",
    imagem: "/brincoCoracaoPerolas.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 499.99,
    descricao: "",
  },
   {
    id: 18,
    nome: "Brinco",
    imagem: "/brincoDeOuroCorcacao.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 299.99,
    descricao: "",
  },
  {
    id: 11,
    nome: "Anel",
    imagem: "/anel-ouro-dezoito-kilates-pedras-verdes.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 1300.0,
    descricao: "",
  },
  {
    id: 12,
    nome: "Anel Ouro",
    imagem: "/anelOuro18k.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 3000.0,
    descricao: "",
  },
  {
    id: 13,
    nome: "Anel Ouro",
    imagem: "/anelOurobrilante.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 2000.0,
    descricao: "",
  },
  {
    id: 14,
    nome: "Anel Ouro",
    imagem: "/anelOuroRedondo.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 2400.0,
    descricao: "",
  },
  {
    id: 15,
    nome: "Anel Prata",
    imagem: "/anelPrataVerde.png",
    avaliacoes: "/estrelinhas-avaliacao.png",
    preco: 2800.0,
    descricao: "",
  },
];

const Home = () => {
  const { adicionarAoCarrinho, carrinho } = useCarrinho();
  const navigate = useNavigate();
  return (
    <>
      <Logo />
      <JoiasDescricao />

      <MensagemDestaque>
        <span>Sua elegância merece destaque.</span>
        Confira nossas joias com design exclusivo e acabamento impecável.
      </MensagemDestaque>

      <ContainerJoias>
        {joiasDisponivel.map((joia) => (
          <div key={joia.id} className="joias">
            <h2> {joia.nome} </h2>
            <img src={joia.imagem} alt={joia.nome} />
            <img src={joia.avaliacoes} alt={joia.nome} className="avaliacoes" />

            <p>R$ {joia.preco.toFixed(2)}</p>
            <button onClick={() => adicionarAoCarrinho(joia)}>Comprar</button>
          </div>
        ))}
      </ContainerJoias>

      <button
        onClick={() => navigate("/carrinho")}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          background: "#000",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "20px",
          cursor: "pointer",
          zIndex: 999,
        }}
      >
        🛍 Carrinho ({carrinho.length})
      </button>

      <DepoimentosPage/>
    </>
  );
};

export default Home;
