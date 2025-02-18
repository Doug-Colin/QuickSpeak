import './App.css'
import { Client } from 'appwrite'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from '@/pages/landing-page/LandingPage'
import DemoPage from '@/pages/demo-page/DemoPage'
// import LoginPage from '@/pages/login-page/LoginPage'
// import RegisterPage from './pages/register-page/RegisterPage'

function App() {
  const client = new Client()
  client.setProject('67b3f62d002c083bfda7')

  return (
    <>
      {/* wrap everything in <div> set to 'min-h-screen' to prevent components from moving on screen during modal/dialog/popup etc */}
      <div className="min-h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/demo" element={<DemoPage />} />
            {/* <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
