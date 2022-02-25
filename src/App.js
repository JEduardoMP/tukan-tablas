import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './views/mainPage/mainPage';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/tasks' element />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
