
import  {} from "react";
import { LogoTipo } from "../Styles/styled";
import imgLogo from "../assets/logo.png"


const Logo = () => {
    return (  
        <>
        <LogoTipo>
             <img src={imgLogo} alt="imagem logo joias"/>
        </LogoTipo>
        </>
    );
}
 
export default Logo;