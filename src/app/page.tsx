import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="mx-auto max-w-72 sm:max-w-xl md:max-w-2xl h-screen overflow-y-scroll scrollbar-hide mt-[50px]">
      <div className="text-center ">
      <header className="text-3xl font-bold mb-2">TailwindCSSの学習サイト</header>
      <h1 className="text-2xl font-bold">メニュー</h1>
      </div>
      <div className="flex flex-col space-y-6 items-center mt-5">
        <Link href="#">
          <button className="border border-color-black block text-2xl text-white  bg-blue-500 rounded-lg shadow-md py-2 px-5  cursor-pointer hoverbutton ">
            Tutorial
          </button>
        </Link>
        <Link href="#">
          <button className="block text-2xl text-white bg-blue-500 rounded-lg shadow-md py-2 px-5  cursor-pointer">
            Lesson1
          </button>
        </Link>
        <Link href="#">
          <button className="block text-2xl text-white bg-blue-500 rounded-lg shadow-md py-2 px-5 cursor-pointer">
            Lesson2
          </button>
        </Link>
        <Link href="#">
          <button className="block text-2xl text-white bg-blue-500 rounded-lg shadow-md py-2 px-5  cursor-pointer">
            Lesson2
          </button>
        </Link>
        
      </div>
      <div className="mt-6">
      <h3 className="text-center">この記事について</h3>
      <p className="text-base/6 ">
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist.
      </p>
      </div>
    </div>
  );
};

export default Page;
