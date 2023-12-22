import Cases from "@/src/components/initial/cases/Cases";
import Hero from "@/src/components/initial/hero/Hero";
import Layout from "@/src/components/initial/layout/Layout";
import Services from "@/src/components/initial/services/Services";
import Testimonies from "@/src/components/initial/testimonies/Testimonies";
import Team from "@/src/components/team/Team";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Team />
      <Cases />
      <Testimonies />
    </Layout>
  );
}
