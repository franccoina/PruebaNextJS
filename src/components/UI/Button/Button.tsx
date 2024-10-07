import styled from "styled-components";
import { IButtonProps } from "@/types/IButton";

const ButtonStyle = styled.button`
    border: 1px solid #5555;
    border-radius:1rem;
    padding: 0.5rem 1rem;
    background-color: white;
    margin: 0;
    color: black;
    font-weight: bold;
    cursor: pointer;
    width: 50%;

    &:hover {
        background-color: black;
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
