import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import CoursesHeader from "../src/container/Courses/CoursesHeader";
// import CoursesJobs from "../src/container/Courses/CoursesJobs";
import OverviewPartners from "../src/container/home/OverviewPartners";
import Form from "../src/components/Form";
import OverviewPrograms from "@/container/home/OverviewPrograms";
import OverviewComments from "@/container/home/OverviewComments";
import OverviewMentor from "@/container/home/OverviewMentor";
import OverviewFaq from "@/container/home/OverviewFAQ";
import OverviewJobs from "@/container/home/OverviewJobs";
import { base_url } from "./api/base_url";

function Courses(props) {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <CoursesHeader />
      <OverviewJobs {...props} />
      <OverviewPartners {...props} />
      <OverviewPrograms {...props} />
      <OverviewComments />
      <OverviewMentor {...props} />
      <Form {...props} />
      <OverviewFaq {...props} />
      <Footer />
    </div>
  );
}

export default Courses;

export async function getServerSideProps({ locale }) {
  const whyUs = await fetch(`${base_url}/common/why-us/?format=json`).then(
    (res) => res.json(),
  );

  const courses = await fetch(`${base_url}/common/course/?format=json`).then(
    (res) => res.json(),
  );

  const faq = await fetch(`${base_url}/common/faq/?format=json`).then((res) =>
    res.json(),
  );

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
        "Course",
        "Home",
        "components",
      ])),
    },
  };
}
