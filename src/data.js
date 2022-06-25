import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import img1 from "./images/contact_form.png";
import img2 from "./images/MsTeams.png";
import img3 from "./images/portfolio.png";
import img4 from "./images/TicTcToe.png";
import img5 from "./images/DiceToss.png";
import img6 from "./images/clock.png";
import img7 from "./images/Calendar.png";


export const Experience = [
  {
    id: 1,
    date: "May 2022",
    iconsSrc: <IoCodeWorking />,
    title: "Technical Content Writer",
    location: "Kochiva",
    description:
      "Composing technical blogs and write-ups for the official website on topics like Data science, Machine learning, Software Development, Competitive programming, Hackathons, Python, etc.",
  },
  {
    id: 2,
    date: "November 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Web Development Team Member",
    location: "CODAME Club, IIIT Bhopal",
    description:
      "An active member of Web Development Team of CODAME, IIIT Bhopal. A contributor in hosting web development events and in the offical website building of the Codame Club",
  },
  {
    id: 3,
    date: "March 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Core Team Member",
    location: "IIITians Network",
    description:
      "Core Team Member and Frontend Developer at the IIITians Network. Contributed in the development of Network Website and Frontend Web Development projects.",
  },
];

export const Projects = [
  {
    id: 1,
    name: "CalendarDocket",
    imageSrc: img7,
    techs: "ReactJs, DayJs, Tailwind CSS",
    github: "https://github.com/yashita-jain/CalendarDocket",
  },
  {
    id: 2,
    name: "MICROSOFT TEAMS ATTENDANCE AUTOMATOR",
    imageSrc: img2,
    techs: "Python, Django, Pandas, MongoDB, Flask, HTML, CSS",
    github: "https://github.com/Python-ProT/msteams-attendance",
  },
  {
    id: 3,
    name: "Contact Form",
    imageSrc: img1,
    techs: "NodeJs, ExpressJs, Pug, MongoDB, JSON, API",
    github: "https://github.com/yashita-jain/Contact-form",
  },

  {
    id: 4,
    name: "Portfolio",
    imageSrc: img3,
    techs: "HTML, CSS, JavaScriptI",
    github: "https://github.com/yashita-jain/portfolio",
  },
  {
    id: 5,
    name: "Tic Tac Toe ",
    imageSrc: img4,
    techs: "React Js, HTML ,CSS",
    github: "https://github.com/yashita-jain/Tictactoe-",
  },
  {
    id: 6,
    name: "Digital Clock",
    imageSrc: img6,
    techs: "JavaScript, HTML, CSS",
    github: "https://github.com/yashita-jain/Clock",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/yashita-jain",
  },
  // {
  //   id: 1,
  //   iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
  //   name: "YouTube",
  //   link: "#",
  // },
  {
    id: 1,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "https://twitter.com/jainyashita06",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yashita-jain-9892a5202/",
  },
  // {
  //   id: 1,
  //   iconSrc: (
  //     <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
  //   ),
  //   name: "Whatsapp",
  //   link: "#",
  // },
];
