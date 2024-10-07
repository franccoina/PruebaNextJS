import styled from "styled-components";
import { IButtonProps } from "@/types/IButton";

const ButtonStyle = styled.button`
    border: 1px solid #5555;
    border-radius: 10px;
    padding: 10px 20px;
    background-color: white;
    margin: 0;
    color: black;
    font-weight: 500;
    cursor: pointer;
    width: 50%;

    &:hover {
        background-color: #115d57;
        color: white;
    }
`

// Componente Button funcional
const Button: React.FC<IButtonProps> = ({ children, disabled = false, onClick, label, type = "button" }) => {
  return (
    <ButtonStyle disabled={disabled} onClick={onClick} type={type}>
      {label}
      {children}
    </ButtonStyle>
  );
};

export default Button;
