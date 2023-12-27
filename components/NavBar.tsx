import Image from "next/image";
import React from "react";
import logo from "../public/assets/logo.svg";
import home from "../public/assets/icon-nav-home.svg";
import movies from "../public/assets/icon-nav-movies.svg";
import series from "../public/assets/icon-nav-tv-series.svg";
import bookmarks from "../public/assets/icon-nav-bookmark.svg";
import avatar from "../public/assets/image-avatar.png";
import Link from "next/link";

const NavBar = () => {
  const routes = [
    { href: "/", label: "home" },
    { href: "/movies", label: "movies" },
    { href: "/series", label: "series" },
    { href: "/bookmarks", label: "bookmarks" },
  ];

  const getSrcByRoute = (routeLabel: string) => {
    switch (routeLabel) {
      case "home":
        return home;
      case "movies":
        return movies;
      case "series":
        return series;
      case "bookmarks":
        return bookmarks;
      default:
        return "";
    }
  };

  return (
    <nav className="flex py-2 px-4 mx-4 my-4">
      <div className="navbar px-2 max-w-6xl mx-auto flex-col justify-between">
        <div className="flex flex-col gap-16 h-96">
          <Link href={"/"} className="pb-4">
            <Image src={logo} alt="logo" width={35} height={35} />
          </Link>
          <ul>
            {routes.map((route) => {
              return (
                <li className="py-4" key={route.label}>
                  <Link href={route.href}>
                    <Image
                      src={getSrcByRoute(route.label)}
                      alt={route.label}
                      width={25}
                      height={25}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Image src={avatar} alt="avatar" width={40} height={40} />
      </div>
    </nav>
  );
};

export default NavBar;
