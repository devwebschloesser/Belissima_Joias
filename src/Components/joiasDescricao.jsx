import {} from "react";
import { AnelOuro, JoiasTipos } from "../Styles/styled";
import imgBrinco from "../assets/brinco18k (1).png";
import imgAnel from "../assets/anelOuro18k.png";
import imgAnelPrata from "../assets/anelPrataVerde.png";

const JoiasDescricao = () => {
  return (
    <>
      <JoiasTipos>
        <img src={imgBrinco} alt="imagem brinco ouro" />
        <p>
          Brilho que encanta, elegância que marca. Descubra o poder do ouro 18k
          em cada detalhe. Sofisticação para elevar qualquer look.
        </p>
      </JoiasTipos>
      <AnelOuro>
        <p>
          O toque de luxo que faltava em você. Nosso anel de ouro é símbolo de
          beleza, estilo e exclusividade. Um clássico eterno.
        </p>
        <img src={imgAnel} alt="imagem anel de ouro" />
      </AnelOuro>
      <JoiasTipos>
        <img src={imgAnelPrata} alt="imagem anel de prata" />
        <p>
          Delicado, moderno e inesquecível. O anel de prata perfeito para quem
          ama brilhar com sutileza e personalidade.
        </p>
      </JoiasTipos>
    </>
  );
};

export default JoiasDescricao;
