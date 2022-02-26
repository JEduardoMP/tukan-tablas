import { Outlet, useLocation, Navigate } from "react-router-dom";

const ValidatorRoute = (props) => {
  const { state } = useLocation();
  return state && state.error ? <Navigate to={"/"} replace={true}/> : <Outlet />;
};

export default ValidatorRoute;
