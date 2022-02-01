import React from 'react';

import { TikTok } from 'react-tiktok';
export default function TikTokGallery() {
  return (
    <section className="">
      <hr className="divider line glow my-24" contenteditable />
      <h2 className="px-3 text-white lg:text-5xl uppercase">
        TikTok Tutorials
      </h2>

      <TikTok url="https://www.tiktok.com/@dev_patterns/video/7059455216953117998" />
    </section>
  );
}
