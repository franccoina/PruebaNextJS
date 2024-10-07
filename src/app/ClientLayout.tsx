"use client"
import { Header } from "../components/header/Header";
import styled from "styled-components";
import { useSession } from 'next-auth/react';
import { Footer } from "@/components/footer/Footer";
import { Sidebar } from "@/components/sidebar/SidebarUser";

const PagesOfflineContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`

const PagesUserContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;
`
const PagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    height: 100%;
    width: 100%;
    padding-top: 54px;
`;
export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data: session } = useSession();

    return (
        <PagesContainer>
            {session?.user ? (
                <>
                    <Header />
                    <Sidebar />
                    <PagesUserContainer>
                        {children}
                        <Footer />
                    </PagesUserContainer>
                </>
            ) : (
                <>
                    <Header />
                    <PagesOfflineContainer>
                        {children}
                        <Footer />
                    </PagesOfflineContainer>
                </>
            )}
        </PagesContainer>
    );
};
