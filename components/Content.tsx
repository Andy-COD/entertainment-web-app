"use client";
import { MovieData, data } from "@/utils/data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Content = () => {
  const path = usePathname();
  const [shows, setShows] = useState(data);
  const handleBookmarkClick = (title?: string) => {
    setShows((prevData: MovieData[]) =>
      prevData.map((item: any) =>
        item.title === title
          ? { ...item, isBookmarked: !item.isBookmarked }
          : item
      )
    );
  };
  return (
    <section className="py-3 flex flex-col items-start w-full">
      <div className="py-4">
        <h2 className="text-3xl font-light">
          {path == "/"
            ? "Recommended for you"
            : path == "/movies"
            ? "Movies"
            : "TV Series"}
        </h2>
      </div>
      <div className="grid grid-cols-4 w-[95%] gap-8 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
        {shows
          .filter((items) => {
            if (path === "/movies") {
              return items.category === "Movie" && items.isTrending === false;
            } else if (path === "/series") {
              return (
                items.category === "TV Series" && items.isTrending === false
              );
            } else if (path === "/bookmarks") {
              return items.isBookmarked === true;
            } else {
              return (
                (items.category === "Movie" ||
                  items.category === "TV Series") &&
                items.isTrending === false
              );
            }
          })
          .map((show: MovieData, index: number) => {
            return (
              <div key={show.title}>
                <div
                  className="flex flex-col relative"
                  onClick={() => handleBookmarkClick(show.title)}
                >
                  {show.isBookmarked ? (
                    <div className="absolute right-4 top-5 p-3 rounded-full hover:cursor-pointer bg-[#10141e72] bg-cover">
                      <Image
                        src={"/assets/icon-bookmark-full.svg"}
                        alt="bookmark"
                        width={15}
                        height={15}
                      />
                    </div>
                  ) : (
                    <div className="absolute right-4 top-5 p-3 rounded-full hover:cursor-pointer bg-[#10141e72] bg-cover">
                      <Image
                        src={"/assets/icon-bookmark-empty.svg"}
                        alt="bookmark"
                        width={15}
                        height={15}
                      />
                    </div>
                  )}
                  <Image
                    src={show.thumbnail?.regular?.large ?? ""}
                    alt={show.title ?? ""}
                    width={400}
                    height={400}
                    style={{
                      borderRadius: "5%",
                    }}
                  />
                </div>
                <div className="flex items-center py-3">
                  {show.year} .{" "}
                  <div className="px-2">
                    {
                      <Image
                        src={
                          show.category == "Movie"
                            ? "/assets/icon-category-movie.svg"
                            : "/assets/icon-category-tv.svg"
                        }
                        alt={show.category == "Movie" ? "movie" : "series"}
                        width={10}
                        height={10}
                      />
                    }
                  </div>
                  {show.category} . {show.rating}
                </div>
                <h3 className="text-xl tracking-wide font-bold title">
                  {show.title}
                </h3>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Content;
