import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#FFDA83",
  "#FF6565",
  "#FF4081",
  "#3F51B5",
  "#9C27B0",
  "#E91E63",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  payload,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);


  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const LabStats = () => {
  const [labData, setLabData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/labCount")
      .then((response) => response.json())
      .then((data) => {
        const transformedData = Object.entries(data).map(([name, value]) => ({
          name,
          value,
        }));
        setLabData(transformedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div  style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "90%",
      height: "100%",
    }}>
    <h6 style={{ marginBottom: "20px" }}>Lab Stats</h6>

      <div>
        <ResponsiveContainer
          width="30%"
          minWidth={300}
          height="100%"
          minHeight={300}
          style={{ zIndex: 1 }}
        >
          <PieChart width={400} height={400}>
            <Pie
              data={labData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {labData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "60%",
          height: "100%",
        }}
      >
        <div style={{ marginRight: "20px" }}>
          {/* Display lab types and their corresponding colors */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {labData.map((labType, index) => (
              <div
                key={labType.name}
                style={{
                  margin: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    marginRight: "10px",
                    width: "10px",
                    height: "10px",
                    backgroundColor: COLORS[index % COLORS.length],
                  }}
                ></div>
                <span style={{ fontSize: "14px" }}>{labType.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabStats;
