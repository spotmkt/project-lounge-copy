import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

const Index = () => {
  return (
    <>
      <Header />
      <WhatsAppWidget />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
