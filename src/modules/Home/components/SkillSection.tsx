/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Dynamic from "next/dynamic";
import { Divider, Grid, Heading } from "@chakra-ui/react";
import { FaCode, FaCogs, FaMobileAlt } from "react-icons/fa";
import { SkillCardProps } from "src/types";

const Section = Dynamic(() => import("@uikit/Section"));
const SkillCard = Dynamic(() => import("@components/SkillCard"));

const skills: SkillCardProps[] = [
  {
    title: "Frontend Development",
    description:
      "I am very happy to develop a frontend because I can turn my ideas into reality",
    icon: <FaCode size={24} />,
    tools: [
      {
        category: "Development Tools",
        items: [
          {
            title: "React.js",
            description: (
              <>
                I use React.JS as my main development tool in working on
                projects. I have known React since 2018 from a friend of mine
                who became my mentor at a workshop. I started exploring the
                React library for mobile and website until recently.
              </>
            ),
          },
          {
            title: "Next.js",
            description: (
              <>
                I use Next.JS as a server side framework to help me improve the
                initial loading performance of the website and enable SEO.
              </>
            ),
          },
          {
            title: "Typescript",
            description: (
              <>
                I use typescript for static typing to construct data structure
                in my project to reduce errors before runtime
              </>
            ),
          },
        ],
      },
      {
        category: "Integration",
        items: [
          {
            title: "GraphQL Code Generator",
            description: (
              <>
                I like using Graphql Code Generator because Graphql Code
                Generator can change Graphql queries and mutations to custom
                hooks so that I can use the code more easily.
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Backend Development",
    description:
      "I developed a backend service to handle data management from the server to the user interface",
    icon: <FaCogs size={24} />,
    tools: [
      {
        category: "Development Tools",
        items: [
          {
            title: "Express JS",
            description: (
              <>
                I use Express js because I am getting used to javascript and
                when I learn express js, it is easier for me to understand it
                compared to other frameworks
              </>
            ),
          },
          {
            title: "Golang",
            description: (
              <>
                I am interested in learning Golang because I want to expand the
                programming language that I can master to help me improve my
                skills
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Mobile Development",
    description:
      "I develop mobile applications so that I can build applications not only websites but also mobile applications. Mobile Development has a promising future in my opinion",
    icon: <FaMobileAlt size={24} />,
    tools: [
      {
        category: "Hybrid",
        items: [
          {
            title: "React Native",
            description: (
              <>
                React Native is the first javascript library I studied in 2018.
                I use React Native as the main development tool for mobile
                development because the code in React Native is similar to
                React.JS
              </>
            ),
          },
          {
            title: "Flutter",
            description: (
              <>
                I got to know flutter in 2019 from a friend of mine. I'm trying
                to develop a mobile app using flutter and I'm quite comfortable
                developing it as I think the system requirements are pretty
                light.
              </>
            ),
          },
        ],
      },
      {
        category: "Native",
        items: [
          {
            title: "Java",
            description: (
              <>
                I studied Android Native when I was in college. I just learned a
                little from Android Native because I still want to explore the
                website first
              </>
            ),
          },
        ],
      },
    ],
  },
];

const SkillSection = () => {
  return (
    <Section paddingBottom='32' paddingTop='4'>
      <Heading size='lg' textAlign='center'>
        Skill and Journey
      </Heading>
      <Divider marginY='4' />
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "repeat(3, 1fr)",
        }}
        marginTop='8'
        gap='4'
      >
        {skills.map((skill) => (
          <SkillCard {...skill} key={skill.title} />
        ))}
      </Grid>
    </Section>
  );
};

export default SkillSection;
