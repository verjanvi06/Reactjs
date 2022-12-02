
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginForm/> } />
        <Route path="/RegistrationForm" element={ <RegistrationForm/>} />
        
      </Routes>
    </div>
  );
}

export default App;
