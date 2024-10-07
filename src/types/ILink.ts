import React from "react";

export interface ILinkProps {
    href: string;
    label: string;
    icon?: React.ReactNode;
    target?: '_blank' | '_self';
}