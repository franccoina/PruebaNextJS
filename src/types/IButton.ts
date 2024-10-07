import React from "react";

type ButtonType = "button" | "submit" | "reset";

export interface IButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean; 
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
}