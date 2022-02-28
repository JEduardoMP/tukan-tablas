// React hooks
import { useContext, useRef } from "react";

// Context
import DataContext from "../../context/dataContext";

// React chart
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

const GraphicsViews = () => {
  const { state } = useContext(DataContext);

  const tableDiv = useRef();

  ChartJS.register(...registerables);

  const downloadChart = () => {
    const canvas = tableDiv.current.children[0];
    let base64 = canvas.toDataURL("image/png");
    base64 = base64.replace("image/png", "image/octet-stream");
    document.location.download = base64
    // window.location.href = base64;
    console.log(window.location);
  };

  return state.data.bmx.series.map((element) => (
    <div
      ref={tableDiv}
      style={{ padding: "2rem", width: "50%", height: "40%" }}
    >
      <Line
        data={{
          labels: element.datos.map((label) => label.fecha),
          datasets: [
            {
              label: `${element.idSerie} - ${element.titulo}`,
              data: element.datos.map((data) => data.dato),
              borderColor: ["rgba(255, 99, 132, 0.4)"],
              borderWidth: 0.6,
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
      <button onClick={() => downloadChart()}>Descargar tabla</button>
    </div>
  ));
};

export default GraphicsViews;
