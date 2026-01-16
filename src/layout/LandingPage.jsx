import Navbar from '../screen/landing/Navbar'
import HeroSection from '../screen/landing/HeroSection'
import StatsSection from '../screen/landing/StatsSection'
import WhyChooseUsSection from '../screen/landing/WhyChooseUsSection'
import FAQSection from '../screen/landing/FAQSection'
import Footer from '../screen/landing/Footer'
import FeaturedProducts from '../screen/landing/FeaturedProducts'
import OurPremiumCollection from '../screen/landing/OurPremiumCollection'


const LandingPage = () => {
  return (
    <div className='bg-gray-50'>
      <HeroSection />
      <FeaturedProducts />
      <StatsSection />
      <OurPremiumCollection />
      <WhyChooseUsSection />
      <FAQSection />
    </div>
  )
}

export default LandingPage
