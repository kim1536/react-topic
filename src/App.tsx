import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Topics from './pages/topics';



function App() {
  return (
  <BrowserRouter> 
  <Routes>
    <Route path="/" element={<Topics/>} />
    <Route path="/add" element={<Add/>} />
    <Route path="/topic/:id" element={<Detail/>} />
    <Route path="/edit/:id" element={<Edit/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App;
