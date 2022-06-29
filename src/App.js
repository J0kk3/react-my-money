import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
//Styles
import './App.css'

//Page Components
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';

function App ()
{
  const { authIsReady } = useAuthContext();

  return (
    <div className="App">
      { authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/signup' element={ <Signup /> } />
          </Routes>
        </BrowserRouter>
      ) }
    </div>

  );
}

export default App