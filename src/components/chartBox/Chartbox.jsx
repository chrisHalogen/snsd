import React from "react";
import "./chartbox.scss";
import { Link } from "react-router-dom";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;

    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: "${x} : data ${yval}",
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

const Chartbox = ({
  color,
  icon,
  title,
  dataKey,
  number,
  percentage,
  chartData,
  dest,
}) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <span style={{ color: color }}>{icon}</span>
          <span>{title}</span>
        </div>
        <h1>{number}</h1>
        <Link to={`/${dest}`} style={{ color: color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <SparkLine
            currentColor={color}
            id="area-sparkLine"
            height="160px"
            type="Area"
            data={chartData}
            width="100"
            color="rgb(242, 252, 253)"
          />
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: percentage < 0 ? "tomato" : "limegreen" }}
          >
            {percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default Chartbox;
