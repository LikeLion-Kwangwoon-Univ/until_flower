import './App.css';
import Balance from './components/Balance';
import { Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Input from './components/Input';
import InputStyled from './components/InputStyled';
import Main from './components/Main';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/input" element={<Input />} />
        <Route path="/input-styled" element={<InputStyled />} />
        <Route path="/product" element={<Product />} />
        <Route path="/balance" element={<Balance />} />
      </Routes>
    </div>
  );
}

export default App;
