import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import StatsSection from '../sections/StatsSection';
import QualificationsSection from '../sections/QualificationsSection';
import ExperienceSection from '../sections/ExperienceSection';
import WorkSection from '../sections/WorkSection';
import ContactSection from '../sections/ContactSection';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollPosition) {
      window.scrollTo(0, location.state.scrollPosition);
    }

    if (location.state?.scrollToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView();
      }
    }
  }, [location]);



  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <QualificationsSection />
      <ExperienceSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}

export default Home;