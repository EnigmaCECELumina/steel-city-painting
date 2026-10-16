import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import ServicesRow from '../components/ServicesRow'
import AboutCard from '../components/AboutCard'
import FeaturedProjects from '../components/FeaturedProjects'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Page(){
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <TrustStrip />
        <section className="py-12"><ServicesRow /></section>
        <section className="py-12"><AboutCard /></section>
        <section className="py-12"><FeaturedProjects /></section>
        <CTA />
      </main>
      <Footer />
    </>
  )
}
