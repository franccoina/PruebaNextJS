"use client"
import { useTranslations } from "next-intl";
import StyledLink from "@/components/UI/Link/Link";

const HomePage = () => {
  const translation = useTranslations("HomeView");
  return (
    <div>
      <h1>{translation("title")}</h1>
      <div>
        <StyledLink href="/profile" label="Profile"></StyledLink><br />
        <StyledLink href="/products" label="Products"></StyledLink><br />
        <StyledLink href="/signup" label="Sign Up"></StyledLink><br />
        <StyledLink href="/login" label="Log In"></StyledLink><br />
      </div>
    </div>
  );
};

export default HomePage;