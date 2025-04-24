// Hero Section
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import FacebookLineIcon from "remixicon-react/FacebookCircleLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import LinkedInLineIcon from "remixicon-react/LinkedinBoxLineIcon";

// Tech Icons
import {
    SiDocker,
    SiJavascript,
    SiAngular,
    SiNodedotjs,
    SiGit,
    SiMongodb,
    SiGrafana,
    SiSpringboot,
    SiMysql,
    SiPostgresql,
    SiHtml5,
    SiR,
    SiPython,
    SiScikitlearn,
} from "react-icons/si";

export const heroIcons = [
    { icon: <GithubLineIcon />, url: "https://github.com/apriilbee" },
    { icon: <LinkedInLineIcon />, url: "https://www.linkedin.com/in/april-dae-bation-974688193" },
    { icon: <YoutubeLineIcon />, url: "https://www.youtube.com/@aprildaebation" },
    { icon: <InstagramLineIcon />, url: "https://www.instagram.com/avrilaholic" },
    { icon: <FacebookLineIcon />, url: "https://www.facebook.com/apriilbee" },
];

//Toggle Section
import MoonIcon from "remixicon-react/MoonFoggyFillIcon";
import SunIcon from "remixicon-react/SunFoggyFillIcon";

export const moonIcon = <MoonIcon />;
export const sunIcon = <SunIcon />;

// About Me Section
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";
import AwardFillIcon from "remixicon-react/AwardFillIcon";

export const aboutData = [
    {
        title: "Github Repos",
        amount: 150,
        icon: <GithubFillIcon />,
    },
    {
        title: "Successful Projects",
        amount: 500,
        icon: <Projector2LineIcon />,
    },
    {
        title: "Satisfied Clients",
        amount: 176,
        icon: <GroupLineIcon />,
    },
    {
        title: "Awards and Recognition",
        amount: 350,
        icon: <AwardFillIcon />,
    },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
    " Hi, I'm April! I'm a Software Engineer. I am currently based in Melbourne while I'm pursuing my Master's Degree. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Cras scelerisque sapien at felis interdum, at tristique elit fermentum. Vestibulum at erat id nunc dictum posuere nec at ligula. Etiam vel felis eu dui dictum interdum. Integer at erat neque. Nam at leo nec erat posuere condimentum. Ut pharetra, libero ut tincidunt hendrerit, libero ligula sollicitudin nisi, non vehicula libero eros ac tortor. Duis lacinia nisi ut sapien maximus, sed lacinia risus egestas.";

// Navbar
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";
export const copyRightIcon = <CopyrightLineIcon />;

import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";
import NewsLineIcon from "remixicon-react/NewspaperLineIcon";
import MacbookLineIcon from "remixicon-react/MacbookLineIcon";

export const navbarData = [
    {
        id: "home",
        name: "Home",
        icon: <Home5LineIcon />,
    },
    {
        id: "about",
        name: "About",
        icon: <UserLineIcon />,
    },
    {
        id: "experience",
        name: "Experience",
        icon: <MacbookLineIcon />,
    },
    {
        id: "blog",
        name: "Blog",
        icon: <NewsLineIcon />,
    },
    {
        id: "contact",
        name: "Contact",
        icon: <ContactsBook2LineIcon />,
    },
];

//Experience
export const experienceItems = {
    "Cake.com (Clockify)": {
        jobTitle: "Software Engineer, Backend @",
        duration: "2023 – 2024",
        desc: [
            "Implemented backend features for Clockify, a widely-used time tracking app, enhancing the overall user experience for clients across web and mobile platforms.",
            "Wrote efficient, reusable, and reliable Java code to deliver high-impact features and fix critical bugs.",
        ],
    },
    "CoDev Philippines": {
        jobTitle: "Software Engineer @",
        duration: "2020 – 2023",
        desc: [
            "Implemented a Data Warehouse using Groovy and MySQL stored procedures to retrieve and analyze historical data for insightful operational decision-making.",
            "Provided technical solutions based on client development and testing requirements, and developed additional backend features to accommodate client requests.",
        ],
    },
    "NEC Telecom": {
        jobTitle: "Software Design Engineer @",
        duration: "2017 – 2020",
        desc: [
            "Developed and tested both client and server-side components for internal NEC projects.",
            "Negotiated requirements with Japanese clients to define a clearer project development scope.",
            "Mentored junior developers through study sessions and code reviews to boost team productivity and reduce rework.",
            "Analyzed specifications and legacy code to design and implement new functionalities.",
        ],
    },
};

// Tech Stack icons
const JavaIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M13.3344 16.055 12.4764 17.243C13.2904 17.969 14.3024 18.332 15.5124 18.332 16.4364 18.31 17.1404 18.0717 17.6244 17.617 18.1157 17.155 18.3614 16.605 18.3614 15.967 18.3614 15.3437 18.1891 14.8303 17.8444 14.427 17.4997 14.0237 16.9204 13.701 16.1064 13.459 15.4317 13.2537 14.9551 13.0667 14.6764 12.898 14.3977 12.722 14.2584 12.5093 14.2584 12.26 14.2584 12.0327 14.3721 11.8493 14.5994 11.71 14.8267 11.5707 15.1311 11.501 15.5124 11.501 15.7911 11.501 16.1064 11.556 16.4584 11.666 16.8104 11.7613 17.1221 11.9153 17.3934 12.128L18.1634 10.929C17.4887 10.3863 16.5941 10.115 15.4794 10.115 14.6801 10.115 14.0237 10.3203 13.5104 10.731 12.9824 11.1417 12.7184 11.6513 12.7184 12.26 12.7257 12.9053 12.9384 13.4077 13.3564 13.767 13.7817 14.1263 14.3867 14.4197 15.1714 14.647 15.8241 14.8523 16.2677 15.0577 16.5024 15.263 16.7297 15.4683 16.8434 15.7177 16.8434 16.011 16.8434 16.297 16.7297 16.517 16.5024 16.671 16.2677 16.8323 15.9304 16.913 15.4904 16.913 14.7717 16.9203 14.0531 16.6343 13.3344 16.055ZM7.80405 16.693C7.58405 16.561 7.37872 16.3667 7.18805 16.11L6.15405 16.957C6.46205 17.4777 6.84339 17.8407 7.29805 18.046 7.72339 18.2367 8.21105 18.332 8.76105 18.332 9.06172 18.332 9.37339 18.2843 9.69605 18.189 10.0187 18.0937 10.3157 17.9323 10.5871 17.705 11.0637 17.3237 11.3131 16.7003 11.3351 15.835V10.247H9.85005V15.549C9.85005 16.055 9.73639 16.4107 9.50905 16.616 9.28172 16.814 8.99572 16.913 8.65105 16.913 8.32105 16.913 8.03872 16.8397 7.80405 16.693ZM3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6Z" />
    </svg>
);

export const techIcons = {
    frontend: [
        { icon: <SiAngular className="w-8 h-8 text-red-500 dark:text-red-400" />, name: "Angular" },
        { icon: <SiJavascript className="w-8 h-8 text-yellow-400 dark:text-yellow-300" />, name: "JavaScript" },
        { icon: <SiHtml5 className="w-8 h-8 text-yellow-400 dark:text-yellow-300" />, name: "JavaScript" },
    ],
    backend: [
        { icon: <JavaIcon className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />, name: "Java" },
        { icon: <SiSpringboot className="w-8 h-8 text-green-500 dark:text-green-400" />, name: "Spring Boot" },
        { icon: <SiNodedotjs className="w-8 h-8 text-lime-500 dark:text-lime-400" />, name: "Node.js" },
    ],
    database: [
        { icon: <SiMysql className="w-8 h-8 text-blue-500 dark:text-blue-400" />, name: "MySQL" },
        { icon: <SiMongodb className="w-8 h-8 text-green-600 dark:text-green-500" />, name: "MongoDB" },
        { icon: <SiPostgresql className="w-8 h-8 text-green-600 dark:text-green-500" />, name: "MongoDB" },
    ],
    devops: [
        { icon: <SiDocker className="w-8 h-8 text-blue-500 dark:text-blue-400" />, name: "Docker" },
        { icon: <SiGrafana className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />, name: "Grafana" },
        { icon: <SiGit className="w-8 h-8 text-orange-500 dark:text-orange-400" />, name: "Git" },
    ],
    data: [
        { icon: <SiPython className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />, name: "Python" },
        { icon: <SiR className="w-8 h-8 text-blue-400 dark:text-blue-300" />, name: "R" },
        { icon: <SiScikitlearn className="w-8 h-8 text-orange-400 dark:text-orange-300" />, name: "Scikit-learn" },
    ],
};
