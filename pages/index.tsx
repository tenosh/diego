import React from "react";
import HomeLayout from "@layouts/home/home";
import { PresentationCard } from "@components/PresentationCard/presentation-card";

/**
 * Represents the home page of eldiego.dev.
 * @return {JSX.Element} The JSX code for the home page.
 */
function Home() {
  return <PresentationCard />;
}

Home.PageLayout = HomeLayout;

export default Home;
