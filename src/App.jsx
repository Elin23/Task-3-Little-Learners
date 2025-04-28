import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import LoaderComponent from './components/LoaderComponent/LoaderComponent'
import 'aos/dist/aos.css';
import Aos from 'aos'
import AdComponent from './components/AdComponent/AdComponent'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import { footerLinks, navLinks } from './data/linksData'
import ScrollToTopComponent from './components/ScrollToTopComponent/ScrollToTopComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import { contact, socialMedia } from './data/contact'
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <div>
          <AdComponent text={"Admission is Open, Grab your seat now"} icon={'/assets/icons/right_arrow.svg'} />
          <NavbarComponent links={navLinks} logo={'/assets/imgs/logo.png'} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/academics" element={<Home />} />
            <Route path="/admissions" element={<Home />} />
            <Route path="/student-life" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/terms" element={<Home />} />
            <Route path="/privacy" element={<Home />} />
            <Route path="/cookies" element={<Home />} />
            {/* note: All routes currently point to the Home component,
              as the website only has a single page for now.
              These routes are placeholders for future pages. */}
          </Routes>
          <ScrollToTopComponent />
          <FooterComponent logo={'/assets/imgs/logo.png'}
            text={"We believe in the power of play to foster creativity, problem-solving skills, and imagination."}
            contact={contact}
            navbarLinks={navLinks}
            footerLinks={footerLinks}
            social={socialMedia}
          />
        </div>
      )}
    </>
  )
}

export default App
