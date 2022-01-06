import React from "react";
import Particles from "react-tsparticles";
import { optionTwo } from "@tsparticles/options";
import { ComponentProps } from "@interfaces/interfaces";
import styles from "./home.module.css";

const HomeLayout = ({ children }: ComponentProps) => {
  return (
    <>
      <Particles options={optionTwo} />
      <div className={styles["main-home-container"]}>{children}</div>
    </>
  );
};

export default HomeLayout;
