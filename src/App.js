import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Taiwan from './components/pages/Taiwan';

import Keelung from './components/pages/Keelung';
import Taipei from './components/pages/Taipei';
import NewTaipei from './components/pages/NewTaipei';
import Taoyuan from './components/pages/Taoyuan';
import Hsinchu from './components/pages/Hsinchu';
import HsinchuCounty from './components/pages/HsinchuCounty';

import MiaoliCounty from './components/pages/MiaoliCounty';
import Taichung from './components/pages/Taichung';
import ChanghuaCounty from './components/pages/ChanghuaCounty';
import NantouCounty from './components/pages/NantouCounty';
import YunlinCounty from './components/pages/YunlinCounty';

import Chiayi from './components/pages/Chiayi ';
import ChiayiCounty from './components/pages/ChiayiCounty';
import Tainan from './components/pages/Tainan';
import Kaohsiung from './components/pages/Kaohsiung';
import PingtungCounty from './components/pages/PingtungCounty';

import YilanCounty from './components/pages/YilanCounty';
import HualienCounty from './components/pages/HualienCounty';
import TaitungCounty from './components/pages/TaitungCounty';
import PenghuCounty from './components/pages/PenghuCounty';
import KinmenCounty from './components/pages/KinmenCounty';
import LienchiangCounty from './components/pages/LienchiangCounty';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component = {Home} />
          <Route path='/scenicSpot' exact component = {Taiwan} />

          <Route path='/scenicSpot/Keelung' exact component = {Keelung} />
          <Route path='/scenicSpot/Taipei' exact component = {Taipei} />
          <Route path='/scenicSpot/NewTaipei' exact component = {NewTaipei} />
          <Route path='/scenicSpot/Taoyuan' exact component = {Taoyuan} />
          <Route path='/scenicSpot/Hsinchu' exact component = {Hsinchu} />
          <Route path='/scenicSpot/HsinchuCounty' exact component = {HsinchuCounty} />

          <Route path='/scenicSpot/MiaoliCounty' exact component = {MiaoliCounty} />
          <Route path='/scenicSpot/Taichung' exact component = {Taichung} />
          <Route path='/scenicSpot/ChanghuaCounty' exact component = {ChanghuaCounty} />
          <Route path='/scenicSpot/NantouCounty' exact component = {NantouCounty} />
          <Route path='/scenicSpot/YunlinCounty' exact component = {YunlinCounty} />

          <Route path='/scenicSpot/Chiayi' exact component = {Chiayi} />
          <Route path='/scenicSpot/ChiayiCounty' exact component = {ChiayiCounty} />
          <Route path='/scenicSpot/Tainan' exact component = {Tainan} />
          <Route path='/scenicSpot/Kaohsiung' exact component = {Kaohsiung} />
          <Route path='/scenicSpot/PingtungCounty' exact component = {PingtungCounty} />

          <Route path='/scenicSpot/YilanCounty' exact component = {YilanCounty} />
          <Route path='/scenicSpot/HualienCounty' exact component = {HualienCounty} />
          <Route path='/scenicSpot/TaitungCounty' exact component = {TaitungCounty} />
          <Route path='/scenicSpot/PenghuCounty' exact component = {PenghuCounty} />
          <Route path='/scenicSpot/KinmenCounty' exact component = {KinmenCounty} />
          <Route path='/scenicSpot/LienchiangCounty' exact component = {LienchiangCounty} />

        </Switch>
      </Router>  
    </>
  );
}

export default App;
