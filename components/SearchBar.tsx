"use client";
import Image from "next/image";
import React from "react";
import icon from "../public/assets/icon-search.svg";
import { usePathname } from "next/navigation";


const SearchBar = () => {

    const pathname = usePathname()

    const getRoutePlaceholder = () => {
        switch(pathname) {
            case "/":
                return "Search for movies or TV series";
            case "/movies":
                return "Search for movies";
            case "/series":
                return "Search for TV series";
            case "/bookmarks":
                return "Search for bookmarked shows"
        }
    }
  return (
    <section className="w-full h-3 py-6 flex items-center search gap-0">
      <div>
        <Image src={icon} alt="search icon" width={25} height={25} />
      </div>
      <div>
        <input type="text" className="w-full py-2 px-5 bg-none focus: outline-none custom-input" placeholder={getRoutePlaceholder()} />
      </div>
    </section>
  );
};

export default SearchBar;
