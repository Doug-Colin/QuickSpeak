import "./App.css";
import { Client } from 'appwrite';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {LandingPage} from '/Users/doug/Desktop/dev/Appwrite_Hackathon/vite-project/src/pages/landing-page/LandingPage.tsx'
import { LoginForm } from "./components/login-form";

function App() {

const client = new Client();
client.setProject('67b3f62d002c083bfda7');

  return (
    <>
       {/* wrap everything in <div> set to 'min-h-screen' to prevent components from moving on screen during modal/dialog/popup etc */}
       <div className="min-h-screen">
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </Router>
        </div>
    </>
  );
}

export default App;
