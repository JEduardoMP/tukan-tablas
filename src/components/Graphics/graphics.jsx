// React hooks
import { useRef } from "react";

// React chart
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

// Styles
import './graphics.styles.css'

const Graphics = ({ element, downloadChart, imgState }) => {
  // Con este useRef accederemos al Canvas
  let tableDiv = useRef();

  // Establece las escalas de las graficas
  ChartJS.register(...registerables);

  return (
    <div
      ref={tableDiv}
      className='graphics-sm graphic-center'
    >
      <Line
        data={{
          labels: element.datos.map((label) => label.fecha),
          datasets: [
            {
              label: `${element.idSerie} - ${element.titulo}`,
              data: element.datos.map((data) => data.dato),
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 1,
              color: '#EEEEE',
            },
          ],
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        }}
      />
      <button className='btn-graphic' onClick={() => downloadChart(tableDiv)}>
        <a href={imgState.href} download={imgState.download}>
          Descargar tabla
        </a>
      </button>
    </div>
  );
};

export default Graphics;
