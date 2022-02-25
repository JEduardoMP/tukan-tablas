import { GraphicsFetch } from "../../helpers/graphicsFetch";

const FormTokenSeries = () => {
  const getDataChart = async(e) => {
    e.preventDefault();
    const info = await GraphicsFetch(e.target[0].value, e.target[1].value)
    console.log(info);
  }
  return (
    <form onSubmit={(e) => getDataChart(e)}>
      <div>
        <label htmlFor="">Token</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Serie</label>
        <input type="text" />
        <input type="submit" />
      </div>
    </form>
  );
};

export default FormTokenSeries;