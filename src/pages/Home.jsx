import React from "react";
import Hero from "../components/Hero";
import AOS from "aos";

export default function Home() {

  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
}