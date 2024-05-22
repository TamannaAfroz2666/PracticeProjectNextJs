"use client";
import React from "react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryPolarAxis,
  VictoryStack,
  VictoryTheme,
} from "victory";

const data2012 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const data2013 = [
  { quarter: 1, earnings: 15000 },
  { quarter: 2, earnings: 12500 },
  { quarter: 3, earnings: 19500 },
  { quarter: 4, earnings: 13000 },
];

const data2014 = [
  { quarter: 1, earnings: 11500 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 20000 },
  { quarter: 4, earnings: 15500 },
];

const data2015 = [
  { quarter: 1, earnings: 18000 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 15000 },
  { quarter: 4, earnings: 12000 },
];
const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];
const dataWind = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
  { quarter: 5, earnings: 33000 },
  { quarter: 6, earnings: 15000 },
  { quarter: 7, earnings: 4000 },
  { quarter: 8, earnings: 19000 },
  { quarter: 9, earnings: 1000 },
  { quarter: 10, earnings: 8000 },
  { quarter: 11, earnings: 9000 },
  { quarter: 12, earnings: 1000 },
];
const sampleData = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 6 },
];
const sampleData1 = [
  { x: 1, y: 1 },
  { x: 2, y: 6 },
  { x: 3, y: 2 },
  { x: 4, y: 3 },
  { x: 5, y: 6 },
  { x: 6, y: 4 },
];

const Dashboard = () => {
  return (
    <div className=" min-h-screen w-[60%] m-auto">
      {/* <h2 className="text-center">dashboard</h2> */}

      <div className="flex gap-4 m-4">
        <div className="w-[400px] h-[400px]">
          <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
            <VictoryAxis
              tickValues={[1, 2, 3, 4]}
              tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
            />
            <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
            <VictoryStack colorScale={"warm"}>
              <VictoryBar data={data2012} x="quarter" y="earnings" />
              <VictoryBar data={data2013} x="quarter" y="earnings" />
              <VictoryBar data={data2014} x="quarter" y="earnings" />
              <VictoryBar data={data2015} x="quarter" y="earnings" />
            </VictoryStack>
          </VictoryChart>
          <h4 className="text-center">Shelter Information</h4>
        </div>
        <div className="w-[400px] h-[400px]">
          <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
            <VictoryAxis
              tickValues={[1, 2, 3, 4]}
              tickFormat={["Winter", "Spring", "Summer", "Fall"]}
            />
            <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />

            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>
          <h4 className="text-center">Flood Damaged Estimates</h4>
        </div>

        <div className="w-[300px] h-[300px]">
          <VictoryPie
            colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
            data={[
              { x: "Houses", y: 35 },
              { x: "Industries", y: 40 },
              { x: "Trees", y: 55 },
            ]}
          />
          <h4 className="text-center pt-[6rem]">Road Ecology </h4>
        </div>
      </div>
      <div className="flex gap-12 mt-[4rem]">
        <div className="w-[400px] h-[400px]">
          <VictoryChart polar theme={VictoryTheme.material}>
            {["north", "south", "Downtown", "Indiana", "West", "WestHall"].map(
              (d, i) => {
                return (
                  <VictoryPolarAxis
                    dependentAxis
                    key={i}
                    label={d}
                    labelPlacement="perpendicular"
                    style={{ tickLabels: { fill: "none" } }}
                    axisValue={d}
                  />
                );
              }
            )}
            <VictoryBar
              style={{ data: { fill: "tomato", width: 25 } }}
              data={[
                { x: "north", y: 10 },
                { x: "south", y: 25 },
                { x: "Downtown", y: 40 },
                { x: "Indiana", y: 50 },
                { x: "West", y: 50 },
                { x: "WestHall", y: 50 },
              ]}
            />
          </VictoryChart>
          <h4 className="text-center">Wind Speed </h4>
        </div>

        <div className="w-[300px] h-[300px]">
          <VictoryPie
            colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
            data={[
              { x: "Coal", y: 35 },
              { x: "Others", y: 40 },
              { x: "Diesel & Petrol", y: 20 },
              { x: "Biomass Burning", y: 5 },
              { x: "Dust", y: 15 },
            ]}
          />
          <h4 className="text-center pt-[6rem]">Air Quality </h4>
        </div>
        <div className="w-[300px] h-[300px]">
          <VictoryChart minDomain={{ y: 0 }}>
            <VictoryLine data={sampleData} />
            <VictoryLine
              data={sampleData1}
              style={{
                data: { stroke: "#c43a31" },
              }}
            />
          </VictoryChart>
          <h4 className="text-center pt-[6rem]">Weather information </h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
