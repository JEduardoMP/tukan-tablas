// React hooks
import { useContext } from "react";

// React router
import { useNavigate } from "react-router-dom";

// Context
import DataContext from "../../context/dataContext";

// Helpers
import { GraphicsFetch } from "../../helpers/graphicsFetch";

// Styles
import './formsTokenSeries.styles.css'

const FormTokenSeries = () => {
  const { state, dispatch } = useContext(DataContext);
  let navigate = useNavigate();

  const getDataChart = async (e) => {
    e.preventDefault();
    const info = await GraphicsFetch(e.target[0].value, e.target[1].value);
    if (info.error) {
      dispatch({ type: "ERROR", payload: info.error });
    } else {
      dispatch({ type: "DATA_CHART", payload: info });
    }
    navigate("/graphics", { state: info });
  };
  return (
    <form className='form-style' onSubmit={(e) => getDataChart(e)}>
      {state.error && state.error.mensaje ? <p>{state.error.mensaje}</p> : null}
      <div className='inputs-style'>
        <label htmlFor="">Token</label>
        <input type="text" placeholder="Ingrece aquí su token" required />
      </div>
      <div className='inputs-style'>
        <label htmlFor="">Serie</label>
        <input
          type="text"
          required
          placeholder="Deben ser separados por comas(,) y sin espacios"
        />
        <input type="submit" />
      </div>
    </form>
  );
};

export default FormTokenSeries;
