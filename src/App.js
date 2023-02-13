
import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';

export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Routes>
              <Route  path="/login" element={<Login/>} exact/>
              {/* <Route  path="/home" element={<Home/>} exact/> */}
              {/* <Route  path="/setoran_tunai" element={<SetoranTunai/>} exact/> */}
            </Routes>
      </BrowserRouter>
    )
  }
}
