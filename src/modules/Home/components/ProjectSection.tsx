import { Divider, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import Dynamic from "next/dynamic";
import { ProjectCardProps } from "src/types";

const Section = Dynamic(() => import("@uikit/Section"));
const ProjectCard = Dynamic(() => import("@components/ProjectCard"));

const Projects: ProjectCardProps[] = [
  {
    name: "GoPet",
    description:
      "I made a Gopet App project for my college assignment. This application is used to make it easier for pet owners to care for their pets. I created this application using React Native and Firebase",
    html_url: "https://github.com/rizkyalviandra/GoPet",
  },
  {
    name: "id.reactjs.org",
    description:
      "I contributed to translating the documentation from React.JS into Indonesian",
    html_url: "https://github.com/rizkyalviandra/id.reactjs.org",
  },
  {
    name: "Gatsby",
    description:
      "I made a pull request for an example of using Auth0 in gatsby",
    html_url: "https://github.com/rizkyalviandra/gatsby",
  },
];

const ProjectSection = () => {
  return (
    <Section paddingY='16'>
      <Heading size='lg' textAlign='center'>
        Project and Contribution
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
        {Projects.map((project) => (
          <ProjectCard {...project} key={project.name} />
        ))}
      </Grid>
    </Section>
  );
};

export default ProjectSection;
