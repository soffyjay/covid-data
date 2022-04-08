import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCases, fetchGraphCases } from "../../../redux";
import { Line } from "react-chartjs-2";
import { currency } from "../../../utils";

const Chart = () => {
  //graph state initialization
  const [graphDates, setGraphDates] = useState([]);
  const [graphCases, setGraphCases] = useState([]);
  const [deathCases, setDeathCases] = useState([]);
  const [recoveryCases, setRecoveryCases] = useState([]);
  const dispatch = useDispatch();

  //this function helps us derive the date from th data so we can use on the graph.
  const getGraphDates = () => {
    const newDates =
      data && Object.keys(data).length > 0 && Object.keys(data.cases);
    setGraphDates(newDates);
  };

  const { data, loading, error } = useSelector((state) => ({
    data: state.graphReducer.data,
    loading: state.graphReducer.loading,
    error: state.graphReducer.error,
  }));

  useEffect(async () => {
    await dispatch(fetchGraphCases());
    if (data !== null) {
      getAllData();
    }
  }, []);

  //this function helps us update our state for the datasets on the chart.
  const getAllData = () => {
    setGraphCases(getChartValues(data.cases));
    setDeathCases(getChartValues(data.deaths));
    setRecoveryCases(getChartValues(data.recovered));
    getGraphDates();
  };

  //this function creates an array of data from our api response.
  const getChartValues = (data) => {
    let chartValues = [];
    data !== null &&
      Object.keys(data).map((option) => {
        chartValues.push(data[option]);
      });
    return chartValues;
  };

  //this function renders our chart data
  const renderChart = () => {
    if (data !== null && !loading) {
      const data = {
        labels: graphDates,
        datasets: [
          {
            label: "Cases",
            lineTension: 0.1,
            borderColor: "#00FF07",
            backgroundColor: "#c3ecc3",
            data: graphCases,
            pointStyle: "circle",
          },

          {
            label: "Recovered",
            lineTension: 0.1,
            data: recoveryCases,
            pointStyle: "circle",
            backgroundColor: "#b980e2",
            borderColor: "#6a0dad",
          },
          {
            label: "Deaths",
            lineTension: 0.1,
            borderColor: "#FF0005",
            data: deathCases,
            pointStyle: "circle",
            backgroundColor: "rgb(255, 99, 0)",
          },
        ],
      };
      const options = {
        pointStyle: "circle",
        legend: { display: true },
        tooltips: {
          usePointStyle: true,
          callbacks: {
            title: function (labels) {
              return "";
            },
            label: (labels) => {
              return currency(labels.value);
            },
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: { display: false },
            },
          ],
          yAxes: [
            {
              gridLines: { display: true },
              ticks: {
                beginAtZero: true,

                callback: (label) => {
                  return currency(label);
                },
              },
            },
          ],
        },
      };
      return <Line data={data} options={options} />;
    }
  };

  if (data) {
    return (
      <div className="chart-container">
        <div className="line-chart-graph">
          <div className="line-chart">{renderChart()}</div>
        </div>
      </div>
    );
  }
};

export default Chart;
