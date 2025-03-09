// Hero Section
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import FacebookLineIcon from "remixicon-react/FacebookCircleLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import LinkedInLineIcon from "remixicon-react/LinkedinBoxLineIcon";

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
