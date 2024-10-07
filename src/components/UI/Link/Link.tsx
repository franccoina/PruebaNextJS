"use client"
import Link from "next/link"
import React from "react"
import styled from "styled-components"
import { ILinkProps } from "@/types/ILink"

const Links = styled(Link)`
    text-decoration: none;
`

const StyledLink: React.FC<ILinkProps> = ({href, label, target}) =>{
    return (
        <Links href={href} target={target}>
            {label}
        </Links>
    )
}

export default StyledLink;