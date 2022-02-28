// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views
import MainPage from "./views/mainPage/mainPage";
import GraphicsViews from "./views/graphicsViews/graphicsViews";

// Components
import ValidatorRoute from "./components/validatorRoute";

// Context
import { DataContextProvider } from "./context/dataContext";

// Styles
import "./App.css";

function App() {
  return (
    <DataContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/graphics" element={<ValidatorRoute />}>
            <Route path="/graphics" element={<GraphicsViews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataContextProvider>
  );
}

export default App;
