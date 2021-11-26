import React from "react";
import Dynamic from "next/dynamic";
import { Divider, Grid, Heading } from "@chakra-ui/react";
import { WorkingCardProps } from "src/types";

const Section = Dynamic(() => import("@uikit/Section"));
const WorkingCard = Dynamic(() => import("@components/WorkingCard"));

const WorkingExperience: WorkingCardProps[] = [
  {
    name: "Ganeshcom Studio",
    description:
      "I'm working on a Management System for oil and gas client using React.JS for the frontend and golang for a small service. I use google cloud to support the services I create and to deploy my application on staging",
    year: "Aug 2021 - current",
  },
  {
    name: "Kanca Studio",
    description:
      "I am working on a ERP system using Next Js for the front end and Hasura service as the Backend and I use Typescript as Type checking. for ApI integration, I use graphql and for database I use postgress.",
    year: "Nov 2019 - Sept 2021",
  },
  {
    name: "Trimagnus Prima Dharma",
    description:
      "In trimagnus prima dharma, I worked on an e-commerce project and I initiated the project using React Js for the front end and using Express Js for the backend. In doing this project, I used waterfall software development which was later changed to use agile software development.",
    year: "Sept 2019 - Aug 2020",
  },
];

const WorkingSection = () => {
  return (
    <Section paddingY='16'>
      <Heading size='lg' textAlign='center'>
        Working Experience
      </Heading>

      <Divider marginY='8' />

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={8}
        justifyContent='center'
      >
        {WorkingExperience.map((working) => (
          <WorkingCard {...working} key={working.name} />
        ))}
      </Grid>
    </Section>
  );
};

export default WorkingSection;
