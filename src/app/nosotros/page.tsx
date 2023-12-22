import Footer from "@/src/components/global/footer/Footer";
import Title from "@/src/components/global/title/Title";
import TeamMember from "@/src/components/nosotros/TeamMember";
import React from "react";

const page = () => {
  return (
    <section className="grid grid-cols-2 justify-items-center gap-8 py-16 bg-texture">
      <TeamMember className="col-span-2" />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
    </section>
  );
};

export default page;
