import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from './pages/home';
import NotFound from './pages/NotFound';
import Error from './pages/Error';
import Singin from './pages/Singin';


function App() {
  return (
  <ErrorBoundary FallbackComponent={Error}>
  <BrowserRouter> 
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/singin" element={<Singin/>} />
    <Route path="/add" element={<Add/>} />
    <Route path="/topic/:id" element={<Detail/>} />
    <Route path="/edit/:id" element={<Edit/>} />
    <Route path="/*" element={<NotFound/>} />
  </Routes>
  </BrowserRouter>
  </ErrorBoundary>
  )
}

export default App;
