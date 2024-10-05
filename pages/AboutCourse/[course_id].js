import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutCourseAccordion from "@/container/AboutCourse/AboutCourseAccordion";
import AboutCourseComputer from "@/container/AboutCourse/AboutCourseComputer";
import AboutCourseField from "@/container/AboutCourse/AboutCourseField";
import AboutCourseHeader from "@/container/AboutCourse/AboutCourseHeader";
import AboutCourseMentor from "@/container/AboutCourse/AboutCourseMentor";
import AboutCoursePlan from "@/container/AboutCourse/AboutCoursePlan";
import OverviewFaq from "@/container/home/OverviewFAQ";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Form from "../../src/components/Form";
import { base_url } from "../api/base_url";

function AboutCourse(props) {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <AboutCourseHeader {...props} />
      <AboutCourseField {...props} />
      <AboutCoursePlan {...props} />
      <AboutCourseAccordion {...props} />
      <AboutCourseMentor {...props} />
      <AboutCourseComputer {...props} />
      <Form {...props} />
      <OverviewFaq {...props} />
      <Footer />
    </div>
  );
}

export default AboutCourse;

export async function getServerSideProps({ locale, params, course_id }) {
  const course = await fetch(
    `${base_url}/common/course/${params.course_id}/?format=json`,
  ).then((res) => res.json());

  const courses = await fetch(`${base_url}/common/course/?format=json`).then(
    (res) => res.json(),
  );

  const faq = await fetch(`${base_url}/common/faq/?format=json`, {
    headers: { "accept-language": locale },
  }).then((res) => res.json());

  return {
    props: {
      course,
      params,
      courses,
      faq,
      ...(await serverSideTranslations(locale, [
        "common",
        "components",
        "Home",
        "AboutCourse",
      ])),
    },
  };
}
