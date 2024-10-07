"use client"
import { useTranslations } from "next-intl";
import StyledLink from "@/components/UI/Link/Link";

const HomePage = () => {
  const translation = useTranslations("HomeView");
  return (
    <div>
      <h1>{translation("title")}</h1>
      <div>
        <StyledLink href="/login" label="Authenticate yourself"></StyledLink><br />
      </div>
    </div>
  );
};

export default HomePage;
