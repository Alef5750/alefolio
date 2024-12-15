import { StaticImageData } from "next/image";

export interface IProject {
  id: number;
  imgSrc: StaticImageData;
  title: string;
  link: string;
  blurb: string;
  // TODO: ADD "tech" array of strings
}
