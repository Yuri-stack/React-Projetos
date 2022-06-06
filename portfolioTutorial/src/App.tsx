import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Contact from "./components/Contacts/Contact"
import Footer from "./components/Footer/Footer"

import "./styles/global.scss"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
