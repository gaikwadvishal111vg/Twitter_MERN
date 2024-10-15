import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/Home/HomePage"
import LoginPage from "./Pages/Login/LoginPage"
import SignUpPage from "./Pages/Signup/SignUpPage"
import  './index.css';
function App() {
  

  return (
    <div className='flex max-w-6xl mx-auto'>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
      </Routes>
    </div>
  )
}

export default App
