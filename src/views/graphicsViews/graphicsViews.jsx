// React hooks
import { useContext, useState } from "react";

// Context
import DataContext from "../../context/dataContext";

// Components
import Graphics from "../../components/Graphics/graphics";
import { useNavigate } from "react-router-dom";

// Styles
import "./graphicsViews.styles.css";

const GraphicsViews = () => {
  // Almacenamos la ruta de descarga (href) y el nombre del documento (download)
  const [imgState, setImgState] = useState({ href: "", download: "" });

  const { state } = useContext(DataContext);

  const navigate = useNavigate();

  // En esta funcion se convertirá el canvas a base64 para posterirmente descargarlo
  const downloadChart = (div) => {
    const canvas = div.current.children[0];
    let base64 = canvas.toDataURL("image/png");
    // base64 = base64.replace("image/png", "image/octet-stream");
    setImgState({ href: base64, download: "table.jpg" });
  };

  // Funcion que retorna el useNavigare para regresar a hacer una busqueda
  const returnHome = () => {
    return navigate("/");
  };

  return (
    <div className="content-center">
      <button className="btn-return" onClick={() => returnHome()}>
        Realizar nueva busqueda
      </button>
      <div className="graphics-distribution">
        {state.data.bmx.series.map((element, idx) => (
          <Graphics
            element={element}
            downloadChart={downloadChart}
            imgState={imgState}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default GraphicsViews;
