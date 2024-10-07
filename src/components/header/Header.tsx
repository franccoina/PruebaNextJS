'use client';
import styled from "styled-components";
import React from "react";
import LogoutButton from "../UI/Button/ButtonLogout";
import { signOut, useSession } from 'next-auth/react';
import LogoutIcon from "../../../public/svg/LogoutIcon";
import { useTranslations } from "next-intl";

const HeaderStyled = styled.div`
    z-index: 1000;
    top: 0;
    position: fixed;
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: space-between;
    padding-left: 50px;
    align-items: center;
    background: linear-gradient(90deg, #B6CB65 0%, #37A879 52%, #4A54AE 100%);
    border-top: solid 1px black;

    & h1 {
        font-weight: bolder;
        color: white;
        font-size: 25px;
    }
`

export const Header: React.FC = () => {
    const traduction = useTranslations('Header');
    const { data: session } = useSession();

    return (
        <HeaderStyled>
            {session?.user ? (
                <>
                    <h1>iProduct</h1>
                    <LogoutButton onClick={() => signOut()} icon={<LogoutIcon />} label={traduction('logout')}></LogoutButton>
                </>
            ) : (
                    <h1>iProduct</h1>
            )}

        </HeaderStyled>
    );
};