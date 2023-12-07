import React from "react";
import "./dashboard.scss";
import LatestOffenders from "../../components/latestOffenders/LatestOffenders";
import Chartbox from "../../components/chartBox/Chartbox";
import { PiTrafficSignalBold } from "react-icons/pi";
import { FaMoneyBills } from "react-icons/fa";

import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import AreaChart from "../../components/areaChart/AreaChart";

const Dashboard = () => {
  const revenue_data = {
    color: "#8884d8",
    icon: <LiaMoneyCheckAltSolid />,
    title: "Monthly Revenue",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    dest: "charts",
    chartData: [
      { x: 1, yval: 2 },
      { x: 2, yval: 6 },
      { x: 3, yval: 8 },
      { x: 4, yval: 5 },
      { x: 5, yval: 10 },
    ],
  };

  return (
    <div className="dashboard">
      <div className="box box1">
        <LatestOffenders />
      </div>
      <div className="box box2">
        <Chartbox {...revenue_data} />
      </div>
      <div className="box box3">{/* <Chartbox {...revenue_data} /> */}</div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">{/* <Chartbox {...revenue_data} /> */}</div>
      <div className="box box6">{/* <Chartbox {...revenue_data} /> */}</div>
      <div className="box box7">
        <AreaChart />
      </div>
      <div className="box box8">Box 8</div>
      <div className="box box9">Box 9</div>
      <div className="box box10">Box 10</div>
    </div>
  );
};

export default Dashboard;
