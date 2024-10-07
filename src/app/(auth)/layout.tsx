"use client"
import styled from "styled-components";
import { Switchbar } from "@/components/switchbar/SwitchbarAuth";

const Container = styled.div`
  
`;
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return ( 
        <Container>
            <Switchbar />
            {children}
        </Container>
    );
}
