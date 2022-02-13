import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { Router } from "./components/router";

function App() {
  return (
      <div className="main"> 
        <h2 className="main-header">Team Management System</h2> 
        <Create/>
        <Read/>
        <Update/>
        <Router/>
          
      </div>    
  );
}

export default App;