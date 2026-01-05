import { useCarrinho } from "../Context/CarrinhoContext.jsx";

const Carrinho = () => {
  const { carrinho, aumentarQuantidade, diminuirQuantidade, total } = useCarrinho();

  if (carrinho.length === 0) return <div>Carrinho vazio</div>;

  return (
    <div className="carrinho">
      <h2>Carrinho de Compras</h2>
      {carrinho.map(item => (
        <div key={item.id} className="item-carrinho">
          <img src={item.imagem} alt={item.nome} width={80} />
          <p>{item.nome}</p>
          <p>R$ {item.preco.toFixed(2)}</p>
          <div>
            <button onClick={() => diminuirQuantidade(item.id)}>-</button>
            <span>{item.quantidade}</span>
            <button onClick={() => aumentarQuantidade(item.id)}>+</button>
          </div>
          <p>Total: R$ {(item.preco * item.quantidade).toFixed(2)}</p>
        </div>
      ))}
      <h3>Total Geral: R$ {total.toFixed(2)}</h3>
    </div>
  );
};

export default Carrinho;
