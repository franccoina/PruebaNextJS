"use client"
import { useTranslations } from "next-intl";
import StyledLink from "@/components/UI/Link/Link";

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
    <Div>
      <h1>{translation("title")}</h1>
      <br/>
      <div>
        <StyledLink href="/login" label="Authenticate yourself"></StyledLink>
      </div>
    </Div>
  );
};

export default HomePage;
