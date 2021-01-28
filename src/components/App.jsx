import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import AboutMe from './AboutMe/AboutMe';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';
import Title from './Title/Title';
import Divider from './Divider/Divider';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <AboutMe />
      <Divider />
      {/* <Projects category="pm" title="Product Management" /> */}
      <Projects category="tech" title="Tech, Data & Design" />
      <Contact />
    </PortfolioProvider>
  );
}

export default App;
