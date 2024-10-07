"use client"
import styled from "styled-components";

const Container = styled.section`
    width: 100%;
    height: 20rem;
    display: flex;
`;

const Div = styled.section`
    width: 50%;
    height: 100%;
`;

export default function ProductsLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>

    );
};