import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/Home/HomePage"
import LoginPage from "./Pages/Login/LoginPage"
import SignUpPage from "./Pages/Signup/SignUpPage"
import  './index.css';
import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";
import NotificationPage from "./Pages/notification/NotificationPage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import toast, { Toaster } from 'react-hot-toast';
function App() {
  

  return (
    <div className='flex max-w-6xl mx-auto'>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/notifications" element={<NotificationPage/>}/>
        <Route path="/profile/:username" element={<ProfilePage/>}/>
      </Routes>
      <RightPanel/>
      <Toaster/>
    </div>
  )
}

export default App
