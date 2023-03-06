import MegaHealth from "../src/assets/mh.png";
import MLoginAPP from "../src/assets/MERN-loginapp.png";
import Portfolio from "../src/assets/profile.png";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineGithub,
  AiOutlineHome,
  AiOutlineUser,

} from "react-icons/ai";

export const projects = [
  {
    id: 1,
    img: Portfolio,
    category: "Website",
    title: "Léo Santos - Portfolio",
    repoLink: "https://github.com/leonardoxyz/portfoliov2",
    description: "This project is the same one that is selling now!",
  },
  {
    id: 2,
    img: MLoginAPP,
    category: "API Apps",
    title: "MERN - Login APP",
    repoLink: "https://github.com/leonardoxyz/MERN-LoginAPP",
    description: "Project for user registration.",
  },
  {
    id: 3,
    img: MegaHealth,
    category: "API Apps",
    title: "MegaHealth",
    repoLink: "https://github.com/leonardoxyz/MegaHealthTCC",
    description: "Pharmaceutical ecommerce of school.",
  },
];

export const navIcons = [
  {
    id: 1,
    icon: <AiOutlineHome/>
  },
  {
    id: 2,
    icon: <AiOutlineUser/>
  },
]

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
    name: 'Léo Santos - Portfolio',
    img: Portfolio,
    desc: "Este projeto tem como finalidade demonstrar fragmentos do meu conhecimento. Vale ressaltar que o projeto está em constante atualização!",
    repoLink: "https://github.com/leonardoxyz/portfoliov2",
    language: "ReactJS",
  },
];
