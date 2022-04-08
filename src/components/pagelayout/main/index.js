import React from "react";
import MainNavs from "../../organisms/mainnavs";
import ChartHeader from "../../organisms/chartheader";
import Chart from "../../organisms/chart";
import Header from "../header";
import "./style.css";
import Map from "../../organisms/leafletmap";

//main component showing the chart and leaflet map
const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="main-chart">
        <MainNavs />
        <ChartHeader />
        <div className="main-chart-container">
          <Chart />
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Main;
