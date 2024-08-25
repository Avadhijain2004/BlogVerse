import React from 'react';

import HeroContent from '../components/HeroContent';
import FeaturedPost from '../components/FeaturedPost';
import AboutSection from '../components/AboutSection';
import CategoryCard from '../components/CategoryCard';
import StorySection from '../components/StorySection';
import AuthorCard from '../components/AuthorCard';
import HomePage from '../components/HomePage';

function Home() {
  return (
    <section>
      <HeroContent />
      <FeaturedPost />
      <AboutSection />
      <CategoryCard />
      <StorySection />
      <AuthorCard />
      <HomePage />
    </section>
  );
}

export default Home;
