'use client';
import styled from "styled-components";
import React from "react";
import StyledNavLink from "../UI/Link/Link";

const FooterStyled = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 120px 40px 100px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 679px) {
    article {
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }

    div {
      justify-content: center;
    }
  }

  a {
    text-decoration: none;
    font-size: 14px;
  }

  .social-icons {
    height: min-content;
    display: flex;
    gap: 20px;
  }
`;

const CopyrightContainer = styled.article`
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  border-top: 1px solid black;
  padding-top: 30px;
  width: 80%;
`;

const FooterNavItem = styled.li`
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

export const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <CopyrightContainer>
        <p>
          © {new Date().getFullYear()} iProduct, Inc. Todos los derechos reservados.
        </p>
      </CopyrightContainer>
    </FooterStyled>
  );
};
