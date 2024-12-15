import pomodoroImg from "@/assets/images/pomodoro-screenshot-1.png";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

import { IProject, ITech } from "./types";

export const projects: IProject[] = [
  {
    id: 1,
    title: "Combo Pomodoro Timer",
    link: "https://pomo-productivity.netlify.app/",
    imgSrc: pomodoroImg,
    blurb:
      "A combination task manager with the classic pomodoro timer method for maximizing productivity by breaking up tasks into small, manageable time-units.",
  },
];

export const technologies: ITech[] = [
  {
    id: 1,
    name: "JavaScript (ES6)",
    Icon: SiJavascript,
    iconColor: "#ECDA1D",
  },
  {
    id: 2,
    name: "HTML5",
    Icon: FaHtml5,
    iconColor: "#D52100",
  },
  {
    id: 3,
    name: "CSS3",
    Icon: FaCss3Alt,
    iconColor: "#274ADF",
  },
  {
    id: 4,
    name: "TypeScript",
    Icon: SiTypescript,
    iconColor: "#0175C9",
  },
  {
    id: 5,
    name: "React",
    Icon: SiReact,
    iconColor: "#00D1F7",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    iconColor: "#38BDF8",
  },
];
