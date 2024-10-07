'use client';
import styled from "styled-components";
import React, { useState } from "react";
import StyledLink from "../UI/Link/Link";
import SelectLanguage from "../UI/SelectLanguage/SelectLanguage";

const navUserLinks = [
    { name: "Products", href: "/products" },
    { name: "Profile", href: "/profile" }
]

const SidebarContainer = styled.div`
    z-index: 10;
    position: fixed;
    width: 20%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: white;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding-top: 64px;
    padding-bottom: 64px;
    gap: 50px;
    padding-left: 50px;
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    height: 100%;
    gap: 20px;


    > * {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        gap: 10px;
    }
`;

export const Sidebar: React.FC = () => {
    return (
        <SidebarContainer>
            <LinksContainer>
                {navUserLinks.map((link) => {                    
                    return(
                        <StyledLink key={link.name} href={link.href} label={link.name} />
                    )}
            )}
            </LinksContainer>
            <SelectLanguage />
        </SidebarContainer>
    );
};