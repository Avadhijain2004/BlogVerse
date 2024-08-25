import React from 'react';

import HeroContent from '../components/HeroContent';
import FeaturedPost from '../components/FeaturedPost';
import AboutSection from '../components/AboutSection';
import CategoryCard from '../components/CategoryCard';

function Home() {
  return (
    <section>
      <HeroContent />
      <FeaturedPost />
      <AboutSection />
      <CategoryCard />
    </section>
  );
}

export default Home;
