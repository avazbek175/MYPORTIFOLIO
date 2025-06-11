import AboutMeMain from "./component/AboutMeSection/AboutMeMain"
import HelperSection from "./component/HelperSection"
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
      <HelperSection/>
    </div>
  )
}

export default App
