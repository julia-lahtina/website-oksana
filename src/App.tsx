import { Footer } from "./layout/footer/Footer"
import { Header } from "./layout/header/Header"
import { AboutMe } from "./layout/sections/aboutMe/AboutMe"
import { Contact } from "./layout/sections/Contact/Contact"
import { GermanForMe } from "./layout/sections/germanForMe/GermanForMe"
import { Testimony } from "./layout/sections/testimony/Testimony"
import { Welcome } from "./layout/sections/welcome/Welcome"
import { WhyMe } from "./layout/sections/whyMe/WhyMe"


function App() {

  return (
    <>
      <Header/>
      <Welcome/>
      <AboutMe/>
      <WhyMe/>
      <GermanForMe/>
      <Testimony/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
