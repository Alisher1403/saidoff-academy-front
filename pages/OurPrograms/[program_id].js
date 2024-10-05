import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../../src/components/Navbar";
import OurProgramsHeader from "../../src/container/OurPrograms/OurProgramsHeader";
import OurProgramsTeam from "../../src/container/OurPrograms/OurProgramsTeam";
import OurProgramsAnother from "../../src/container/OurPrograms/OurProgramsAnother";
import OverviewFaq from "../../src/container/home/OverviewFAQ";
import Footer from "../../src/components/Footer";
import Form from "../../src/components/Form";
import OverviewPrograms from "@/container/home/OverviewPrograms";
import { base_url } from "../api/base_url";

function OurPrograms(props) {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <OurProgramsHeader {...props} />
      <OurProgramsTeam {...props} />
      <OverviewPrograms {...props} />
      <Form {...props} />
      <OverviewFaq {...props} />
      <Footer />
    </div>
  );
}

export default OurPrograms;

export async function getServerSideProps({ locale, params }) {
  const courses = await fetch(`${base_url}/common/course/?format=json`).then(
    (res) => res.json(),
  );

  const ourProgram = await fetch(
    `${base_url}/common/our-program/${params.program_id}/?format=json`,
  ).then((res) => res.json());

  const faq = await fetch(`${base_url}/common/faq/?format=json`, {
    headers: { "accept-language": locale },
  }).then((res) => res.json());

  return {
    props: {
      courses,
      ourProgram,
      faq,
      ...(await serverSideTranslations(locale, [
        "common",
        "OurPrograms",
        "components",
        "Home",
      ])),
    },
  };
}
