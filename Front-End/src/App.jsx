import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import "./app.css"
import Header from "./common/Header/Header"
import Footer from "./common/Footer/Footer"
import Home from "./pages/Home/Home"
function App() {
  

  return (
    <>
    <Router>
    <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>

        </Routes>

     <Footer/>

    </Router>
        
    </>
  )
}

export default App
