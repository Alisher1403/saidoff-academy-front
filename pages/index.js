import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../src/components/Navbar";
import OverviewHeader from "../src/container/home/OverviewHeader";
import OverviewChoose from "../src/container/home/OverviewChoose";
import OverviewFuture from "../src/container/home/OverviewFuture";
import OverviewJobs from "../src/container/home/OverviewJobs";
import OverviewPartners from "../src/container/home/OverviewPartners";
import Footer from "../src/components/Footer";
import Form from "../src/components/Form";
import OverviewFaq from "../src/container/home/OverviewFAQ";
import OverviewPrograms from "../src/container/home/OverviewPrograms";
import OverviewComments from "../src/container/home/OverviewComments";
import OverviewMentor from "../src/container/home/OverviewMentor";
import { base_url } from "./api/base_url";

export default function Home(props) {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <OverviewHeader {...props} />
      <OverviewChoose {...props} />
      <OverviewFuture />
      <OverviewJobs {...props} />
      <OverviewPartners {...props} />
      <OverviewPrograms {...props} />
      <OverviewComments {...props} />
      <OverviewMentor {...props} />
      <Form {...props} />
      <OverviewFaq {...props} />
      <Footer />
    </main>
  );
}

export async function getServerSideProps({ locale }) {
  const whyUs = await fetch(`${base_url}/common/why-us/?format=json`).then(
    (res) => res.json(),
  );

  const courses = await fetch(`${base_url}/common/course/?format=json`).then(
    (res) => res.json(),
  );

  const faq = await fetch(`${base_url}/common/faq/?format=json`, {
    headers: { "accept-language": locale },
  }).then((res) => res.json());

  const partners = await fetch(`${base_url}/common/partner/?format=json`).then(
    (res) => res.json(),
  );

  const programs = await fetch(
    `${base_url}/common/our-program/?format=json`,
  ).then((res) => res.json());

  const team = await fetch(`${base_url}/common/team/?format=json`).then((res) =>
    res.json(),
  );

  const studentFeedback = await fetch(
    `${base_url}/common/student-feedback/?format=json`,
  ).then((res) => res.json());

  return {
    props: {
      whyUs,
      faq,
      partners,
      courses,
      programs,
      team,
      studentFeedback,
      ...(await serverSideTranslations(locale, [
        "common",
        "Home",
        "components",
      ])),
    },
  };
}
