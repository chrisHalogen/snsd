import React from "react";
import "./topbar.scss";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineMenu } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { BiPowerOff } from "react-icons/bi";
import { useStateContext } from "../../context/ContextProvider";

const NavButton = ({ title, customFunc, icon, container_class }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      // style={{ color }}
      className={container_class}
    >
      <span
      //   style={{ background: dotColor }}
      //   className=""
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Topbar = () => {
  const { userName, userRole } = useStateContext();

  return (
    <div className="top-bar">
      <NavButton
        title="Menu"
        customFunc={{}}
        icon={<AiOutlineMenu />}
        container_class="toggle"
      />

      <div className="user">
        <span>
          {`${userName}`} logged in as {`${userRole}`}
        </span>

        <img src="./user-img.jpg" alt="" />

        <NavButton
          title="Profile"
          customFunc={{}}
          icon={<ImProfile />}
          container_class="inner-icon"
        />

        <NavButton
          title="Logout"
          customFunc={{}}
          icon={<BiPowerOff />}
          container_class="inner-icon"
        />
      </div>
    </div>
  );
};

export default Topbar;
