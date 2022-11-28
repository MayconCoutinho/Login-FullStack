import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import { ErrorPage } from "./page/ErrorPage"
import { HomePage } from "./page/HomePage"
import { LoginPage } from "./page/LoginPage"
import { RegisterPage } from "./page/RegisterPage"
import './styles/index.css'

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="/Register" element={<RegisterPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </>
  )
}