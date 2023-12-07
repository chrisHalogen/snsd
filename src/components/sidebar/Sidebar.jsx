import React from "react";
import "./sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import { Spacer } from "../index";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";

import { PiTrafficSignalBold } from "react-icons/pi";
import { RiWebcamFill, RiDashboard2Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { RxActivityLog } from "react-icons/rx";
import { BiSolidVideos, BiPowerOff } from "react-icons/bi";
import { MdGpsFixed } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { GrUserSettings } from "react-icons/gr";
import { BsBarChartFill } from "react-icons/bs";

const Sidebar = () => {
  const links = [
    {
      title: "Main",
      links: [
        {
          name: "Dashboard",
          icon: <RiDashboard2Line />,
          dest: "",
        },
        {
          name: "Charts",
          icon: <BsBarChartFill />,
          dest: "charts",
        },
      ],
    },
    {
      title: "Lists",
      links: [
        {
          name: "Violations",
          icon: <PiTrafficSignalBold />,
          dest: "violations",
        },
        {
          name: "Cameras",
          icon: <RiWebcamFill />,
          dest: "cameras",
        },
        {
          name: "Users",
          icon: <FaUsers />,
          dest: "users",
        },
        {
          name: "Logs",
          icon: <RxActivityLog />,
          dest: "logs",
        },
      ],
    },
    {
      title: "Others",
      links: [
        {
          name: "Full Videos",
          icon: <BiSolidVideos />,
          dest: "full-videos",
        },
        {
          name: "GPS",
          icon: <MdGpsFixed />,
          dest: "gps",
        },
      ],
    },
    {
      title: "Personal",
      links: [
        {
          name: "Profile",
          icon: <ImProfile />,
          dest: "profile",
        },
        {
          name: "Settings",
          icon: <GrUserSettings />,
          dest: "settings",
        },
        {
          name: "Logout",
          icon: <BiPowerOff />,
          dest: "logout",
        },
      ],
    },
  ];

  return (
    <div className="sidebar">
      <div className="close-icon">
        <TooltipComponent content="Close Sidebar" position="BottomCenter">
          <button type="button" onClick={{}} className="">
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
      <Spacer height="1.5rem" />
      <div className="logo">
        <img src="./snsd.png" alt="" />
      </div>
      <Spacer height="2rem" />
      <div className="navigation">
        {links.map((item) => (
          <div key={item.title}>
            <p className="links-title">{item.title}</p>
            {item.links.map((link) => (
              <NavLink
                to={`/${link.dest}`}
                key={link.name}
                onClick={{}}
                // style={({ isActive }) => ({
                //   backgroundColor: isActive ? currentColor : "",
                // })}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
