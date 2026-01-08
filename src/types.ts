import type socialIcons from "./assets/socialicons";

export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type SocialItem = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
};

export interface ProjectItem {
  name: string;
  link: string;
  desc: string;
  icon: string;
  tech?: string[];
  repo?: string;
}

export interface PublicationItem {}

export enum Page {
  Projects = "projects",
  Publications = "publications",
  Blog = "blog",
  About = "about",
  Search = "search",
}
