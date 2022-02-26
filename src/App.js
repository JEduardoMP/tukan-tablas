// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Views
import MainPage from './views/mainPage/mainPage';
import GraphicsViews from './views/graphicsViews/graphicsViews';

// Components
import ValidatorRoute from './components/validatorRoute';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/graphics' element={<ValidatorRoute />} >
          <Route path='/graphics' element={<GraphicsViews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
