"use client"

import styled from "styled-components";
import React from "react";
import StyledLink from "../UI/Link/Link";

const navAuthLinks = [
    { name: " LOG IN ", href: "/login" },
    { name: " SIGN UP ", href: "/signup" },
    { name: " HOME ", href: "/" },
]

const SwitchbarContainer = styled.div`
    z-index: 10;
    position: relative;
    width: 100%;
    top: 0;
    background-color: #fff;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    > * {
        opacity: 0.5;
        font-weight: bold;
        font-size: 12px;
        padding: 0;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        gap: 10px;
    }
`;

export const Switchbar: React.FC = () => {
    return (
        <SwitchbarContainer>
            <LinksContainer>
            {navAuthLinks.map((link) => {                    
                    return(
                        <StyledLink key={link.name} href={link.href} label={link.name} />
                    )}
            )}
            </LinksContainer>
        </SwitchbarContainer>
    );
};