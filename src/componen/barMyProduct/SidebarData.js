import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Nama",
    path: "#",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  {
    title: "Store",
    path: "#",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "store 1",
        path: "#",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "store 2",
        path: "#",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Product",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "My Product",
        path: "/myProduct",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Selling Product",
        path: "/sellingProduct",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Order",
    path: "#",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Event 1",
        path: "#",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Event 2",
        path: "#",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Info",
    path: "#",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
