import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
