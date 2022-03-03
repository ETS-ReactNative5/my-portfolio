import React from 'react';
import Tiles from './SkillsGallery';

export default function SkillSet() {
  return (
    <div>
      <section className="">
        <hr className="divider line glow" contenteditable />
        <h2 className="section-title px-3 text-white lg:text-6xl uppercase">
          skillset noteables
        </h2>
        <Tiles />
      </section>
    </div>
  );
}
