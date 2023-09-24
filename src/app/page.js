import Image from 'next/image';
import Navbar from '../../Components/Navbar/Navbar';
import Play from '../../Components/Play/Play';
import About from '../../Components/About/About';
import Project from '../../Components/Project/Project';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
  return (
    <main className="h-full max-h-full ">
      <Navbar />
      <Play />
      <About />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
