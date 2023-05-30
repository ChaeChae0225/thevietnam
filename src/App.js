import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/mainpage';
import Customer from './components/Customer';
import Business from './pages/businessStart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Mainpage />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/business' element={<Business />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
