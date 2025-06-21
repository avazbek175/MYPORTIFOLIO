import AboutMeMain from "./component/AboutMeSection/AboutMeMain"
import HelperSection from "./component/HelperSection"
import HeroGradient from "./component/heroSection/heroGradient"
import HeroMain from "./component/heroSection/heroMain"
import SubHeroSection from "./component/HeroSection/SubHeroSection"
import NavbarMain from "./component/Navbar/NavbarMain"
import { SkilMain } from "./component/SkillSection/SkilMain"

function App() {

  return (
    <div className="font-body">
      <NavbarMain/>
      <HeroMain/>
      <HeroGradient/>
      <SubHeroSection/>
      <AboutMeMain/>
      <HelperSection/>
      <SkilMain/>
    </div>
  )
}

export default App
