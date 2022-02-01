import React, { Component } from 'react';
import './Logo.css';
import { ThemeContext } from '../contexts/ThemeContext';
import TikTokGallery from './TikTokGallery';
import Hero from './Hero';
import SkillSet from './SkillSet';

class Home extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const styles = {
      classes: isDarkMode
        ? 'bg-gray-700 py-24 min-w-screen bg-cover'
        : 'bg-img py-24 min-w-screen bg-cover',
    };

    return (
      <main className={styles.classes}>
        <Hero />
        <TikTokGallery />
        <SkillSet />
      </main>
    );
  }
}

export default Home;
