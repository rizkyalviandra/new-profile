export type ProjectCardProps = {
  name: string;
  description: string;
  html_url: string;
};

export type SocialMediaButtonProps = IconButtonProps & {
  href: string;
  mode?: "dark" | "light";
};

export type WorkingCardProps = {
  name: string;
  description: string;
  year: string;
};

export type SkillCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  tools: {
    category: string;
    items: { title: string; description: React.ReactNode }[];
  }[];
};
