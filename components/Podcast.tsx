"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishDate: string;
};

const truncateTitle = (title: string, maxLength: number) => {
  if (title.length <= maxLength) return title;
  return title.slice(0, maxLength) + '...';
};

export default function LatestPodcastSection() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube-videos');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVideos(data.videos);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <section
    className="flex flex-col items-center justify-center w-full py-16 bg-[#1B1927]"
    aria-labelledby="latest-videos-title"
  >
    <div className="flex flex-col w-[80%] mx-auto">
      <div className="flex flex-wrap items-center justify-between w-full gap-5 text-center">
        <h2
          id="latest-videos-title"
          className="my-auto text-3xl font-semibold leading-none text-white"
        >
          Latest Episodes
        </h2>
        <a
    href="https://www.youtube.com/@TheBrighterSideofBluePodcast/featured"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded border border-white px-6 py-2 text-white font-bold hover:bg-gray-600 transition"
  >
    Browse All
    <svg
      className="ml-2 h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </a>
      </div>

      <div className="flex flex-wrap items-stretch w-full mt-5">
          {videos.map((video) => (
 <article
 key={video.id}
 className="flex flex-col w-80 p-8 min-w-[240px] grow shrink rounded-[30px_30px_0px_0px]"
>
 <div className="flex flex-col h-full">
   <Image
     src={video.thumbnail}
     alt={`${video.title} thumbnail`}
     width={340}
     height={200}
     className="object-contain w-full rounded-2xl"
   />

   <div className="flex flex-col flex-grow">
     <h3 className="mt-5 text-xl font-bold leading-10 text-stone-50 line-clamp-2 h-20">
       {video.title}
     </h3>
     <p className="mt-4 text-base leading-7 text-stone-300 line-clamp-3 flex-grow">
       {video.description}
     </p>
   </div>

   <div className="flex items-center justify-between w-full gap-10 pt-4 mt-4 text-base leading-loose border-t border-zinc-600 text-stone-300">
     <span className="text-stone-400">
       {new Date(video.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
     </span>
     <a
       href={`https://www.youtube.com/watch?v=${video.id}`}
       target="_blank"
       rel="noopener noreferrer"
       className="flex items-center"
     >
       <Image
         src="/playbutton.svg"
         alt="Play"
         width={34}
         height={34}
         className="w-9 h-9"
       />
     </a>
   </div>
 </div>
</article>
          ))}
        </div>
      </div>
    </section>
  );
}
