import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Services from '../components/Services'
import Features from '../components/Features'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function HomePage() {
  return (
    <>
      <section className="mt-12">
        <Hero />
      </section>

      <section className="mt-16">
        <FeaturedProducts />
      </section>

      <section className="mt-16">
        <Services />
      </section>

      <section className="mt-16">
        <Features />
      </section>

      <section className="mt-12">
        <Stats />
      </section>

      <section className="mt-12">
        <Testimonials />
      </section>

      <section className="mt-12">
        <CTA />
      </section>
    </>
  )
}
