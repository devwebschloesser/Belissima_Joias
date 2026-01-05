import {
  CarrinhoContainer,
  ProdutoCard,
  ImagemProduto,
  Informacoes,
  Nome,
  Preco,
  Quantidade,
  Acoes,
  Botao,
  BotaoRemover,
  Total,
  BotaoWhats,
  BotaoDiv,
  BotaoVoltar,
} from "../Styles/styled";
import { useCarrinho } from "../Context/CarrinhoContext";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";

const Carrinho = () => {
  const nevegar = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { carrinho, removerDoCarrinho, alterarQuantidade, valorTotal } =
    useCarrinho();

  const finalizarCompra = () => {
    const numeroWhatsApp = "5551992887395";

    const mensagem = carrinho
      .map((item) => {
        return `Produto: ${item.nome} | Quantidade: ${
          item.quantidade
        } | Preço: R$ ${item.preco.toFixed(2)}`;
      })
      .join("\n");

    const textoFinal = `Olá, gostaria de finalizar a compra com os seguintes itens:\n\n${mensagem}\n\nTotal: R$ ${valorTotal.toFixed(
      2
    )}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      textoFinal
    )}`;

    window.open(url, "_blank");
  };

  return (
    <CarrinhoContainer>
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        carrinho.map((item) => (
          <ProdutoCard key={item.id}>
            <ImagemProduto src={item.imagem} alt={item.nome} />
            <Informacoes>
              <Nome>{item.nome}</Nome>
              <Preco>R$ {item.preco.toFixed(2)}</Preco>
              <Quantidade>Quantidade: {item.quantidade}</Quantidade>
            </Informacoes>
            <Acoes>
              <Botao onClick={() => alterarQuantidade(item.id, "aumentar")}>
                +
              </Botao>
              <Botao onClick={() => alterarQuantidade(item.id, "diminuir")}>
                -
              </Botao>
              <BotaoRemover onClick={() => removerDoCarrinho(item.id)}>
                Remover
              </BotaoRemover>
            </Acoes>
          </ProdutoCard>
        ))
      )}

      <Total>Total: R$ {valorTotal.toFixed(2)}</Total>

      <BotaoDiv>
        <BotaoWhats onClick={finalizarCompra}>
          <FaWhatsapp size={20} style={{ marginRight: "8px" }} />
          Finalizar Compra no WhatsApp
        </BotaoWhats>
      </BotaoDiv>
      <BotaoVoltar onClick={() => nevegar("/")}> Voltar</BotaoVoltar>
    </CarrinhoContainer>
  );
};

export default Carrinho;
