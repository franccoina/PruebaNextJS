import React from "react";
import { useRouter } from 'next/navigation';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { IButtonProps } from "@/types/IButton";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  width: 125px;
  height:54px;

  &:hover {
    transform: scale(0.95);
  }

  svg {
    margin-right: 10px;
  }
`;

const LogoutButton: React.FC<IButtonProps> = ({ icon, type, onClick }) => {
  return (
    <Button type={"button"} onClick={onClick}>
      {icon} Logout
    </Button>
  );
};

export default LogoutButton;