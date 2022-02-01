import React from 'react';
import Tiles from './SkillsGallery';

export default function SkillSet() {
  return (
    <div>
      <section className="">
        <hr className="divider line glow my-24" contenteditable />
        <h2 className="px-3 text-white lg:text-5xl uppercase">
          skillset noteables
        </h2>
        <Tiles />
      </section>
    </div>
  );
}
