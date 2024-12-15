import { StaticImageData } from "next/image";

export interface IProject {
  id: number;
  imgSrc: StaticImageData;
  title: string;
  link: string;
  blurb: string;
  // TODO: ADD array of ids of tech skills
}

export interface ITech {
  id: number;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  iconColor: string;
}
