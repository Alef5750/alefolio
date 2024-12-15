import pomodoroImg from "@/assets/images/pomodoro-screenshot-1.png";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiReact } from "react-icons/si";

export const projects = [
  {
    id: 1,
    title: "Combo Pomodoro Timer",
    link: "https://pomo-productivity.netlify.app/",
    imgSrc: pomodoroImg,
    blurb:
      "A combination task manager with the classic pomodoro timer method for maximizing productivity by breaking up tasks into small, manageable time-units.",
  },
];

export const techs = [
  {
    id: 1,
    name: "JavaScript (ES6)",
    Icon: SiJavascript,
  },
  {
    id: 2,
    name: "HTML5",
    Icon: FaHtml5,
  },
  {
    id: 3,
    name: "CSS3",
    Icon: FaCss3Alt,
  },
  {
    id: 4,
    name: "TypeScript",
    Icon: SiTypescript,
  },
  {
    id: 5,
    name: "React",
    Icon: SiReact,
  },
];
