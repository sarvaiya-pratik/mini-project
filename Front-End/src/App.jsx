import {BrowserRouter as Router,Route,Routes, BrowserRouter} from "react-router-dom"
import "./app.css"
import Header from "./common/Header/Header"
import Footer from "./common/Footer/Footer"
function App() {
  

  return (
    <>
    <Router>
    <Header/>
        <Routes>
          <Route></Route>

        </Routes>

     <Footer/>

    </Router>
        
    </>
  )
}

export default App
