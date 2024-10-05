import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MentorsHeader from "../src/container/Mentors/MentorsHeader";
import OurMentors from "../src/container/Mentors/OurMentors";
import Navbar from "@/components/Navbar";
import OverviewFaq from "@/container/home/OverviewFAQ";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import CommunityLifeTwo from "../src/container/Mentors/CommunityLifeTwo";
import { base_url } from "./api/base_url";

function Mentors(props) {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <MentorsHeader />
      <OurMentors {...props} />
      <CommunityLifeTwo />
      <Form {...props} />
      <OverviewFaq {...props} />
      <Footer />
    </div>
  );
}

export default Mentors;

export async function getServerSideProps({ locale }) {
  const team = await fetch(`${base_url}/common/team/?format=json`).then((res) =>
    res.json(),
  );

  const courses = await fetch(`${base_url}/common/course/?format=json`).then(
    (res) => res.json(),
  );

  const faq = await fetch(`${base_url}/common/faq/?format=json`, {
    headers: { "accept-language": locale },
  }).then((res) => res.json());

  return {
    props: {
      team,
      courses,
      faq,
      ...(await serverSideTranslations(locale, [
        "common",
        "components",
        "Mentors",
        "Home",
      ])),
    },
  };
}
