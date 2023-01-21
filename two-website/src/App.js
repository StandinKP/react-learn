import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Herosection from "./Herosection"
import Cardsection from "./Cardsection"
import Appsection from "./Appsection"

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Cardsection />
      <Appsection />
      <Footer />
    </div>
  )
}

export default App
