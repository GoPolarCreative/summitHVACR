import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-body">
      <Nav />
      <Hero />
      <Services />
      <WhyChoose />
      <Gallery />
      <Testimonials />
      <About />
      <ServiceArea />
      <Contact />
      <Footer />
    </div>
  );
}
