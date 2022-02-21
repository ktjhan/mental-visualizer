import React from "react";
import { Box } from "@mui/system";
import { ResponsiveLine } from "@nivo/line";

const LineGraph = ({ data }) => {
  const gad7Data = data.map((event) => {
    return {
      x: event["Timestamp"],
      y: event["GAD-7 Score"],
    };
  });

  const phq9Data = data.map((event) => {
    return {
      x: event["Timestamp"],
      y: event["PHQ-9 Score"],
    };
  });

  const lines = [
    {
      id: "GAD-7",
      data: gad7Data,
    },
    {
      id: "PHQ-9",
      data: phq9Data,
    },
  ];

  return (
    <>
      <Box sx={{ height: 650, width: 800 }}>
        <ResponsiveLine
          data={lines}
          margin={{ top: 100, right: 100, bottom: 150, left: 200 }}
          axisLeft={{
            orient: "left",
            legend: "Score",
            tickSize: 5,
            tickRotation: 20,
            legendPosition: "middle",
            legendOffset: -40,
          }}
          axisBottom={{
            orient: "bottom",
            legend: "Visit Date & Time",
            tickSize: 5,
            tickRotation: 20,
            legendPosition: "middle",
            legendOffset: 75,
          }}
          pointSize={15}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
            },
          ]}
        />
      </Box>
    </>
  );
};

export default LineGraph;
