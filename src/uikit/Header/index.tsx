import React from "react";
import Link from "next/link";
import { Flex, Grid, GridItem, Heading } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon } from "react-icons/fa";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuBackgroundColor = useColorModeValue("white", "gray.900");

  return (
    <Flex
      boxShadow='md'
      paddingY='4'
      paddingX='8'
      justifyContent='space-between'
      alignItems='center'
      position='fixed'
      top='0'
      left='0'
      right='0'
      backgroundColor={menuBackgroundColor}
      zIndex='sticky'
    >
      <Grid templateColumns='repeat(2, 1fr)' gap='8' alignItems='center'>
        <Link href='/'>
          <a>
            <Heading>Profile</Heading>
          </a>
        </Link>
      </Grid>
      <Grid templateColumns='repeat(2, 1fr)' gap='8' alignItems='center'>
        <GridItem>
          <IconButton
            icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            aria-label='colorMode'
            onClick={toggleColorMode}
            borderRadius='full'
          />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Header;
