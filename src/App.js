import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Routes>
              {/* <Route  path="/login" element={<Login/>} exact/> */}
              <Route  path="/home" element={<Home/>} exact/>
              {/* <Route  path="/setoran_tunai" element={<SetoranTunai/>} exact/> */}
            </Routes>
      </BrowserRouter>
    )
  }
}
