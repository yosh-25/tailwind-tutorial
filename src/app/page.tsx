import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="mx-auto max-w-72 sm:max-w-xl md:max-w-2xl min-h-svh">
      <header className="text-3xl font-bold">TailwindCSSの学習サイト</header>
      <h1 className="text-2xl font-bold">メニュー</h1>
      <div className="flex flex-col gap-2 justify-between items-center">
        <Link href="#">
          <button className="block text-2xl text-white  bg-blue-500 rounded-lg shadow-md p-2 cursor-pointer">
            Tutorial
          </button>
        </Link>
        <Link href="#">
          <button className="block text-2xl text-orange-500">Lesson1</button>
        </Link>
        <Link href="#">
          <button className="block text-2xl text-green-700">Lesson2</button>
        </Link>
      </div>
      <h3>この記事について</h3>
      <div className="text-base/6">
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist.
      </div>
    </div>
  );
};

export default Page;
