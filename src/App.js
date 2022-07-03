import { Routes, Route } from "react-router-dom";
import Login from './components/login/Login/Login';
import SignUp from './components/login/SignUp/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
