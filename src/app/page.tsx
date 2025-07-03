import React from "react";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/work";
import TimeLine from "@/components/Home/timeline";
import Platform from "@/components/Home/platform";
import Portfolio from "@/components/Home/portfolio";
import Upgrade from "@/components/Home/upgrade";
import Perks from "@/components/Home/perks";
import { Metadata } from "next";
import Inicio from "@/components/Home/Hero/inicio";
import SectoresEspecializacion from "@/components/Home/especialities";
export const metadata: Metadata = {
  title: "Qbic Solutions Group",
};

export default function Home() {
  return (
    <main>
      <Inicio />
      <Hero />
      <TimeLine />
      <Upgrade />
      <Work />
      <SectoresEspecializacion />
      {/* <Portfolio />
      <Platform />
      <Perks /> */}
    </main>
  );
}
