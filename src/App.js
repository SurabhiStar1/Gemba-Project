
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import DashBoard from './components/DashBoard';
import Table  from './components/Table';
import Profile from './components/Profile'
import FormPage from './components/FormPage'
import HomePage from './components/HomePage'


const App = () => {
  return (
      <Routes>
        <Route  path='/' element={<HomePage />} />
        <Route  path='/login' element={<Login   />} />
        <Route path='dashboard' element={<DashBoard />}>
          <Route path='home' element={<Home />} />
          <Route path='table' element={<Table />} />
          <Route path='profile' element={<Profile />} />
          <Route path ='form' element = {<FormPage/>}/>
        </Route>
      </Routes>
  );
};

export default App;
