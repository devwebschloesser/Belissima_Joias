import styled from "styled-components";

export const LogoTipo = styled.div`
  display: flex;
  justify-content: center;
`;

export const JoiasTipos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 500px;
  }

  p {
    max-width: 600px;
    font-size: 40px;
    color: #ffffff;
    font-family: "Great Vibes", cursive;
    font-weight: 400;
    font-style: normal;
  }

  @media (max-width: 432px){
    p{
      font-size: 20px;
    }
    img{
      width: 200px;
    }
  }
`;

export const AnelOuro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 500px;
  }

  p {
    max-width: 600px;
    color: #ffffff;
    font-size: 40px;
    font-family: "Great Vibes", cursive;
    font-weight: 400;
    font-style: normal;
  }

   @media (max-width: 432px){
    p{
      position: relative;
      left: 20px;
      font-size: 20px;
    }
    img{
      width: 200px;
    }
  }

`;

export const ContainerJoias = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;

  .joias {
    margin: 10px;
    padding: 10px;
    width: 200px;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .avaliacoes {
    width: 100px;
  }

  h2 {
    color: #ffa500;
  }

  p {
    color: #ffffff;
  }

  button {
    background: #ffa500;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
  }

  @media (max-width: 432px){
    .joias{
      width: 160px;
    }
  }

  @media (max-width: 394px){
     .joias{
        width: 140px;
     }
  }

  @media (max-width: 360px){
    .joias{
      width: 130px;
    }
  }
`;


export const CarrinhoContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  
  border-radius: 10px;
  box-shadow: 0px 0px 10px #ccc;

  @media (max-width: 432px){
     max-width: 400px;
  }
`;

export const ProdutoCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
  
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
`;

export const ImagemProduto = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
`;

export const Informacoes = styled.div`
  flex: 1;
`;

export const Nome = styled.h3`
  font-size: 18px;
  margin: 0 0 5px;
`;

export const Preco = styled.p`
  font-weight: bold;
  color: #FFA500;
`;

export const Quantidade = styled.p`
  margin-top: 5px;
`;

export const Acoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Botao = styled.button`
  background: #FFA500;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #246d4a;
  }
`;

export const Total = styled.h2`
  text-align: right;
  color: #FFA500;
  margin-top: 30px;
`;

export const BotaoRemover = styled(Botao)`
  background: #FFA500;

  &:hover {
    background: #c0392b;
  }
`;

export const BotaoDiv = styled.div`
display: flex;
justify-content: end;

`

export const BotaoWhats = styled.button`
  background-color: #25D366; 
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 10px;

  &:hover {
    background-color: #1ebe5b;
  }
`;

export const MensagemDestaque = styled.div`
  text-align: center;
  margin: 40px 20px 20px 20px;
  font-size: 40px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.6;
   font-family: "Great Vibes", cursive;
    font-weight: 400;
    font-style: normal;
  
  span {
    display: block;
    font-weight: bold;
    font-size: 40px;
    color: #FFA500 ;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;

    span {
      font-size: 1.5rem;
    }
  }
`;

export const BotaoVoltar = styled.button`
  position: relative;
  left: 600px;
  background-color: #25D366; 
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 10px;

  &:hover {
    background-color: #1ebe5b;
  }

  @media (max-width: 432px){
     position: relative;
     left: 260px;
  }

  @media (max-width: 360px){
     position: relative;
     left: 200px;
  }
`;