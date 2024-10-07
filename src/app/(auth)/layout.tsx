"use client"
import { Switchbar } from "@/components/switchbar/SwitchbarAuth";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return ( 
        <>
            <Switchbar />
            {children}
        </>
    );
}
