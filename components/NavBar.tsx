"use client";
import Image from "next/image";
import React from "react";
import logo from "../public/assets/logo.svg";
import home from "../public/assets/icon-nav-home.svg";
import homeactive from "../public/assets/icon-nav-home-active.svg";
import movies from "../public/assets/icon-nav-movies.svg";
import moviesactive from "../public/assets/icon-nav-movies-active.svg";
import series from "../public/assets/icon-nav-tv-series.svg";
import seriesactive from "../public/assets/icon-nav-tv-active.svg";
import bookmarks from "../public/assets/icon-nav-bookmark.svg";
import bookmarksactive from "../public/assets/icon-nav-bookmarks-active.svg";
import avatar from "../public/assets/image-avatar.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const routes = [
    { href: "/", label: "home" },
    { href: "/movies", label: "movies" },
    { href: "/series", label: "series" },
    { href: "/bookmarks", label: "bookmarks" },
  ];

  const pathname = usePathname();

  const getSrcByRoute = (routeLabel: string) => {
    if (routeLabel == "home") {
      if (pathname == "/") {
        return homeactive;
      } else {
        return home;
      }
    } else if (routeLabel == "movies") {
      if (pathname == "/movies") {
        return moviesactive;
      } else {
        return movies;
      }
    } else if (routeLabel == "series") {
      if (pathname == "/series") {
        return seriesactive;
      } else {
        return series;
      }
    } else if (routeLabel == "bookmarks") {
      if (pathname == "/bookmarks") {
        return bookmarksactive;
      } else {
        return bookmarks;
      }
    }
  };

  return (
    <nav className="flex py-2 px-4 mx-4 my-4 w-full ">
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
