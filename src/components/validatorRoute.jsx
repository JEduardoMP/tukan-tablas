import { Outlet, useLocation, Navigate } from "react-router-dom";

const ValidatorRoute = () => {
  let { state } = useLocation();

  return (state && state.error) || (state && state.message) ? (
    <Navigate to={"/"} state={state} />
  ) : (
    <Outlet />
  );
};

export default ValidatorRoute;
