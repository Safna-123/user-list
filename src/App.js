import logo from './logo.svg';
import './App.css';
import Adduser from './component/Adduser';
import Searchuser from './component/Searchuser';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewall from './component/Viewall';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Adduser/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/search" element={<Searchuser/>}/>
      <Route path="/view" element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
