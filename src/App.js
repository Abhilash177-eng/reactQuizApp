import './App.css';
import React from 'react'
import Quiz from './quiz'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Questions from './questions';
function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Quiz}></Route>
        <Route exact path='/questions' component={Questions}></Route>
      </Router>
    </div>
  );
}
export default App;