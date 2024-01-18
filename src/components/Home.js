import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], 
];

export const chartOptions = {
  backgroundColor: '#BFCBCE',
  borderRadx: ''

}

function Home(props) {
  return (

    <div style={{ padding: '10px', borderRadius: '10px', border: '1px solid #D3D3D3' }}> 
      <Chart
        chartType="PieChart"
        width="80%"
        height="450px"
        data={data}
        options={chartOptions}

      />
    </div>
  );
}

export default Home;
