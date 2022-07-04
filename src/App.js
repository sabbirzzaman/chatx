import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from './components/login/Login/Login';
import SignUp from './components/login/SignUp/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
