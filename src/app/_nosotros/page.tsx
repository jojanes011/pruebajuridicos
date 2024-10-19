import TeamMember from "@/src/components/nosotros/TeamMember";
import React from "react";

const page = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-8 py-16 bg-texture">
      <TeamMember className="col-span-1 sm:col-span-2" />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
    </section>
  );
};

export default page;
