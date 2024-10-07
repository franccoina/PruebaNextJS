"use client"
import styled from "styled-components";
import { useTranslations } from "next-intl";
import { Switchbar } from "@/components/switchbar/SwitchbarAuth";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const HomePage = () => {
  const translation = useTranslations("HomeView");
  return (
    <>
    <Switchbar />
    <Div>
      <h1>{translation("title")}</h1>
    </Div></>
  );
};

export default HomePage;
