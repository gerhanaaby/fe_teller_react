import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Kriling",
    //path: "/skn",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Setoran Kriling",
        path: "/skn",
      },
      {
        title: "Penitipan Kriling",
        path: "/about-us/vision",
      },
    ],
  },
  {
    title: "RTGS",
    //path: "/SingleCustomerTransfer",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Single Customer Transfer",
        path: "/services/services1",
        cName: "sub-nav",
      },
      {
        title: "Outward Interbank Transfer",
        path: "/services/services2",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Pemindahbukuan",
    //path: "/contact",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Mata Uang Sama",
        path: "/services/services1",
        cName: "sub-nav",
      },
      {
        title: "Mata Uang Beda",
        path: "/services/services2",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Saldo Cash Box",
    //path: "/contact",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "IDR",
        path: "/services/services1",
        cName: "sub-nav",
      },
      {
        title: "Valas",
        path: "/services/services2",
        cName: "sub-nav",
      },
      {
        title: "Denominasi",
        path: "/services/services2",
        cName: "sub-nav",
      },
    ],
  },
];
