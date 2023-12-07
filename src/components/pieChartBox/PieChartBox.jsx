import React from "react";
import "./pieChartBox.scss";

// import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

// import { useStateContext } from "../../contexts/ContextProvider";

const Doughnut = ({ id, data, legendVisiblity, height }) => {
  //   const { currentMode } = useStateContext();
  let currentMode = "light";

  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisiblity, background: "white" }}
      height={height}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      tooltip={{ enable: true }}
    >
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationDataLabel,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "600",
              color: "#fff",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

const PieChartBox = () => {
  const pieChartData = [
    { x: "2018", y: 18, text: "35%" },
    { x: "2019", y: 18, text: "15%" },
    { x: "2020", y: 18, text: "25%" },
    { x: "2021", y: 18, text: "25%" },
  ];
  return (
    <div className="pieChartBox">
      <h1>Pie Chart</h1>
      <Doughnut
        id="pie-chart"
        data={pieChartData}
        legendVisiblity={false}
        height="300px"
      />
    </div>
  );
};

export default PieChartBox;
