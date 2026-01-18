import Hero from '../components/home/Hero'
import PillarsSection from '../components/home/PillarsSection'
import NewsSection from '../components/home/NewsSection'
import CTASection from '../components/home/CTASection'
import SectionDivider from '../components/common/SectionDivider'

const Home = () => {
  return (
    <>
      <Hero />
      <SectionDivider colorTo="white" />
      <PillarsSection />
      <SectionDivider colorTo="#f5f0e8" />
      <NewsSection />
      <SectionDivider colorTo="#fffbd4" variant="wave-gentle" />
      <CTASection />
    </>
  )
}

export default Home
