import React from "react";
import HomeLayout from "@layouts/home/home";
import GlowContainer from "@components/containers/GlowContainer";
import MainTitle from "@components/ui/main-title/MainTitle";

/**
 * Represents the home page of eldiego.dev.
 * @return {JSX.Element} The JSX code for the home page.
 */
const Home = (): JSX.Element => {
  return (
    <GlowContainer width="w-2/3" height="h-15">
      <MainTitle title="ELDIEGOdev" />
    </GlowContainer>
  );
};

Home.PageLayout = HomeLayout;

export default Home;
