import React from 'react';

import { TikTok } from 'react-tiktok';
export default function TikTokGallery() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('https://www.tiktok.com/@dev_patterns/');
  //     const json = await res.json();
  //     setData(json.hits);
  //   };
  //   fetchData();
  // }, [setData]);

  // console.log(data);
  return (
    <section className="">
      <hr className="divider line glow my-24" contentEditable />
      <h2 className="px-3 text-white lg:text-5xl uppercase">
        TikTok Tutorials
      </h2>

      <TikTok url="https://www.tiktok.com/@dev_patterns/video/7059455216953117998" />
    </section>
  );
}
