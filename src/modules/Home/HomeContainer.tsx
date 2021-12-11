/* eslint-disable react/no-unescaped-entities */
import Layout from "@uikit/Layout";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Section from "@uikit/Section";
import SocialMediaButton from "@components/SocialMediaButton";
import { SocialMediaButtonProps } from "src/types";
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import WorkingSection from "./components/WorkingSection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";

const SocialMedias: SocialMediaButtonProps[] = [
  {
    href: "mailto:rizkyalviandra@icloud.com",
    "aria-label": "email",
    icon: <FaEnvelope />,
  },
  {
    href: "https://www.linkedin.com/in/rizkyalviandra/",
    "aria-label": "linkedin",
    icon: <FaLinkedin />,
  },
  {
    href: "https://github.com/rizkyalviandra",
    "aria-label": "github",
    icon: <FaGithub />,
  },
  {
    href: "https://discord.gg/cAtQb88tjf",
    "aria-label": "discord",
    icon: <FaDiscord />,
  },
];

const HomeContainer: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Profile</title>
      </Head>
      <Layout>
        <Section paddingY='24' marginTop='16'>
          <Grid
            justifyItems={{ base: "center", lg: "flex-start" }}
            templateColumns={{ base: "1fr", lg: "1.5fr 2fr 1fr" }}
            textAlign={{ base: "center", lg: "left" }}
            gap='8'
          >
            <Image
              borderWidth='medium'
              borderColor='gray.800'
              borderStyle='solid'
              borderRadius='full'
              boxSize='300px'
              fallbackSrc='https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
              src='/profile.jpg'
              alt='Rizky Alviandra'
            />
            <Stack textAlign={{ base: "center", lg: "left" }}>
              <Heading size='xl'>Hello,</Heading>
              <Heading size='lg'>I'm Rizky Alviandra</Heading>
              <Text>
                I am a Frontend Developer who likes to use React.JS as my main
                library to work on projects. I am very happy to explore React.JS
                and now I am deep in testing and performance on React.JS so that
                I can create applications that are easy to maintain and have
                good performance
              </Text>
              <Divider marginY='4' />
              <GridItem>
                <Center>
                  <Stack direction='row'>
                    {SocialMedias.map((socialMedia) => (
                      <SocialMediaButton
                        {...socialMedia}
                        mode='light'
                        key={socialMedia["aria-label"]}
                      />
                    ))}
                  </Stack>
                </Center>
              </GridItem>
            </Stack>
          </Grid>
        </Section>
        <SkillSection />
        <WorkingSection />
        <ProjectSection />
      </Layout>
    </>
  );
};

export default HomeContainer;
