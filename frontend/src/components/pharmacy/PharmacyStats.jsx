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

  // const drugName = payload.name;

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
      {/* {drugName} */}
    </text>
  );
};

const PharmStats = () => {
  const [drugData, setDrugData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/price-count")
      .then((response) => response.json())
      .then((data) => {
        const transformedData = Object.entries(data).map(([name, value]) => ({
          name,
          value,
        }));
        setDrugData(transformedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div  style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      height: "100%",
    }}>
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
              data={drugData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {drugData.map((entry, index) => (
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
          {/* Display drug names and their corresponding colors */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {drugData.map((drug, index) => (
              <div
                key={drug.name}
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
                <span style={{ fontSize: "14px" }}>{drug.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmStats;
