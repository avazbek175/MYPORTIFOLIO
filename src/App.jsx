import AboutMeMain from "./component/AboutMeSection/AboutMeMain"
import HeroGradient from "./component/heroSection/heroGradient"
import HeroMain from "./component/heroSection/heroMain"
import SubHeroSection from "./component/HeroSection/SubHeroSection"
import NavbarMain from "./component/Navbar/NavbarMain"

function App() {

  return (
    <div className="font-body">
      <NavbarMain/>
      <HeroMain/>
      <HeroGradient/>
      <SubHeroSection/>
      <AboutMeMain/>
    </div>
  )
}

export default App
