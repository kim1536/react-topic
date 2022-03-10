import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import Edit from './pages/Edit';
import TopicDetail from './pages/topicDetail';
import Topics from './pages/topics';



function App() {
  return (
  <BrowserRouter> 
  <Routes>
    <Route path="/" element={<Topics/>} />
    <Route path="/add" element={<Add/>} />
    <Route path="/topic/:id" element={<TopicDetail/>} />
    <Route path="/edit/:id" element={<Edit/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App;
