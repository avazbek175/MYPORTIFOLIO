import AboutMeMain from "./component/AboutMeSection/AboutMeMain"
import { ExspericienMain } from "./component/ExperienceSection/ExspericienMain"
import HelperSection from "./component/HelperSection"
import HeroGradient from "./component/heroSection/heroGradient"
import HeroMain from "./component/heroSection/heroMain"
import SubHeroSection from "./component/HeroSection/SubHeroSection"
import NavbarMain from "./component/Navbar/NavbarMain"
import { SkilMain } from "./component/SkillSection/SkilMain"
import { SubSkills } from "./component/SkillSection/SubSkills"

function App() {

  return (
    <div className="font-body">
      <NavbarMain/>
      <HeroMain/>
      <HeroGradient/>
      <SubHeroSection/>
      <AboutMeMain/>
      <SkilMain/>
      <SubSkills/>
      <ExspericienMain/>
      <HelperSection/>
    </div>
  )
}

export default App
