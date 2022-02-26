// React hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Helpers
import { GraphicsFetch } from "../../helpers/graphicsFetch";

const FormTokenSeries = () => {
  const [data, setData] = useState(null);

  console.log(data);

  let navigate = useNavigate();

  const getDataChart = async(e) => {
      e.preventDefault();
      const info = await GraphicsFetch(e.target[0].value, e.target[1].value)
      setData(info)
      if (info.error) {
        
      }
      navigate('/graphics', {state: info})
  }
  return (
    <form onSubmit={(e) => getDataChart(e)}>
      {data && data.error ? <p>{data.error.mensaje}</p> : null}
      <div>
        <label htmlFor="">Token</label>
        <input type="text" required/>
      </div>
      <div>
        <label htmlFor="">Serie</label>
        <input type="text" required placeholder="Coloque las series que desea visualizar seperandolas por comas(,) y sin espacios"/>
        <input type="submit" />
      </div>
    </form>
  );
};

export default FormTokenSeries;