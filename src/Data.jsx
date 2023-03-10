import MegaHealth from "../src/assets/mh.png";
import MLoginAPP from "../src/assets/MERN-loginapp.png";
import Portfolio from "../src/assets/profile.png";
import DevFlower from "../src/assets/DevFlower.png";
import Petstop from "../src/assets/Petstop.png";
import backPort from "../src/assets/backgroundPort.png";
import logo0 from "../src/assets/logo1.png";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineGithub,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";

export const projects = [
  {
    id: 0,
    img: Portfolio,
    category: "Website",
    title: "Léo Santos - Portfolio",
    description: "This project is the same one that is selling now!",
    background: backPort,
    logo: logo0,
    repo: "https://github.com/leonardoxyz/portfoliov2",
    pDesc: "Project created in order to expose my projects and demonstrate to the public my skills always in favor of education and knowledge.",
    demo: "https://leonardo.vercel.app",
  },
  {
    id: 1,
    img: MLoginAPP,
    category: "API Apps",
    title: "MERN - Login APP",
    description: "Project for user registration.",
    logo: MLoginAPP,
    background: backPort,
    repo: "https://github.com/leonardoxyz/MERN-LoginAPP",
    pDesc: "The project allows you to create an account, remember your password via a PIN, use an avatar. Check out more on my github!",
    demo: "https://github.com/leonardoxyz/MERN-LoginAPP"
  },
  {
    id: 2,
    img: MegaHealth,
    category: "API Apps",
    title: "MegaHealth",
    description: "Pharmaceutical ecommerce of school.",
    logo: MegaHealth,
    background: backPort,
    repo: "https://github.com/leonardoxyz/MegaHealthTCC",
    pDesc: "Project created as completion of course. Having an API and registering several products. Check out more on my github!",
    demo: "https://github.com/leonardoxyz/MegaHealthTCC"
  },
  {
    id: 3,
    img: DevFlower,
    category: "Website",
    title: "DevFlower",
    description: "Ecommerce project focused on floristry. - In Development.",
    logo: DevFlower,
    background: backPort,
    pDesc: "This project started from an activity to acquire knowledge and delivery of works.",
    demo: "https://github.com/leonardoxyz/DevFlower",
    repo: "https://github.com/leonardoxyz/DevFlower",
  },
  {
    id: 4,
    img: Petstop,
    category: "Website",
    title: "Petstop",
    description: "E-commerce project focused on our pets. - In Development.",
    logo: Petstop,
    background: backPort,
    pDesc: "This project started from an evaluative activity by the company Programmers to deliver activities.",
    demo: "https://github.com/leonardoxyz/PetStop",
    repo: "https://github.com/leonardoxyz/PetStop",
  },
];

export const navIcons = [
  {
    id: 1,
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    icon: <AiOutlineUser />,
  },
];

export const contacts = [
  {
    id: 1,
    icon: <AiOutlineMail />,
    text: "LeonardoVolxy@gmail.com",
  },

  {
    id: 2,
    icon: <AiOutlineWhatsApp />,
    text: "+55 (16) 99313-7105",
  },

  {
    id: 3,
    icon: <AiOutlineGithub />,
    text: "https://github.com/leonardoxyz",
  },
];

export const pPages = [
  {
    id: 1,
    name: "Léo Santos - Portfolio",
    img: Portfolio,
    desc: "Este projeto tem como finalidade demonstrar fragmentos do meu conhecimento. Vale ressaltar que o projeto está em constante atualização!",
    repoLink: "https://github.com/leonardoxyz/portfoliov2",
    language: "ReactJS",
  },
];
