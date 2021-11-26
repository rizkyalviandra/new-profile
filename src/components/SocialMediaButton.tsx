import React from "react";
import { SocialMediaButtonProps } from "src/types";
import { IconButton, Link } from "@chakra-ui/react";

const SocialMediaButton = ({
  href,
  mode,
  ...iconButtonProps
}: SocialMediaButtonProps) => {
  return (
    <Link
      href={href}
      _hover={{ textDecoration: "none" }}
      borderRadius='full'
      tabIndex={-1}
    >
      <IconButton borderRadius='full' {...iconButtonProps} />
    </Link>
  );
};

export default SocialMediaButton;
