import MegaHealth from "../src/assets/mh.png";
import MLoginAPP from "../src/assets/MERN-loginapp.png";
import Portfolio from "../src/assets/profile.png";
import DevFlower from "../src/assets/DevFlower.png";
import Petstop from "../src/assets/Petstop.png";
import backPort from "../src/assets/backgroundPort.png";
import logo0 from "../src/assets/logo1.png";
import backgroundDF from '../src/assets/backgroundDF.png'
import NardesFigueiredo from '../src/assets/NardesFigueiredo.png'
import Csharp from '../src/assets/csharp.png'
import Lobato from '../src/assets/Lobato.png'
import Lobato2 from '../src/assets/Lobato2.png'
import Photoland from '../src/assets/Photoland.png'
import LeoFood from '../src/assets/leofood.png'
import LeoStore from '../src/assets/ls.png'
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
    category: "Website",
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
    category: "Website",
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
    background: backgroundDF,
    pDesc: "This project started from an activity to acquire knowledge and delivery of works.",
    demo: "https://devflower.vercel.app",
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
  {
    id: 5,
    img: NardesFigueiredo,
    category: "Website",
    title: "Nardes Figueiredo",
    description: "Website to demonstrate services contracted by the company Nardes.",
    logo: NardesFigueiredo,
    background: backPort,
    pDesc: "This project focuses on contacting the company, viewing services and promoting your business.",
    demo: "https://nardesfigueiredo.vercel.app",
    repo: "https://github.com/leonardoxyz/NardesFigueiredo",
  },
  {
    id: 6,
    img: Csharp,
    category: "Website",
    title: "Sistema de Pedido - MVC",
    description: "Project created for order management and in favor of learning.",
    logo: Csharp,
    background: backPort,
    pDesc: "This project's main functionality is to enable the user to manage the products registered in the database, enabling creation, deletion, editing and also deletion.",
    demo: "https://github.com/leonardoxyz/SolvedRequests",
    repo: "https://github.com/leonardoxyz/SolvedRequests",
  },
  {
    id: 7,
    img: Lobato,
    category: "React Native",
    title: "Biblioteca Virtual",
    description: "Project created with an educational purpose for reading by students - In development.",
    logo: Lobato2,
    background: backPort,
    pDesc: "This project aims to promote reading among students in favor of education.",
    demo: "https://github.com/leonardoxyz/Lobato-ReactNative-Expo",
    repo: "https://github.com/leonardoxyz/Lobato-ReactNative-Expo",
  },
  {
    id: 8,
    img: Photoland,
    category: "Website",
    title: "E-Commerce Cameras",
    description: "This project has created with intuit of learning and practice!",
    logo: Photoland,
    background: backPort,
    pDesc: "The project is a sample E-Commerce of Cameras! I used STRIPE for register products, values, names and yours descriptions...",
    demo: "https://github.com/leonardoxyz/photoland",
    repo: "https://github.com/leonardoxyz/photoland",
  },
  {
    id: 9,
    img: LeoFood,
    category: "Website",
    title: "Restaurant Landingpage",
    description: "This project has created with intuit of learning and practice!",
    logo: LeoFood,
    background: backPort,
    pDesc: "Project created for a fictice Restaurant called LeoFod!",
    demo: "https://leofood.vercel.app",
    repo: "https://github.com/leonardoxyz/leofood",
  },
    {
    id: 10,
    img: LeoStore,
    category: "Website",
    title: "E-Commerce",
    description: "This project has created with intuit of learning and practice!",
    logo: LeoStore,
    background: backPort,
    pDesc: "Project created for a fictice E-Commerce called LeoStore!",
    demo: "https://leostore.vercel.app",
    repo: "https://github.com/leonardoxyz/leostore",
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
