import React from "react";
import { Text } from "@chakra-ui/layout";
import Section from "@uikit/Section";

const Footer = () => {
  return (
    <>
      <Section bg='black' paddingY='8'>
        <Text color='white' textAlign='center'>
          Copyright &copy; 2021 Rizky Alviandra
        </Text>
      </Section>
    </>
  );
};

export default Footer;
