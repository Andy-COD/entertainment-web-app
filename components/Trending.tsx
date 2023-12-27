import React from "react";
import { MovieData, data } from "@/utils/data";
import Image from "next/image";

const Trending = () => {
  const trends = data.filter((movie) => movie.thumbnail?.trending);
  return (
    <section className="py-5 flex flex-col items-start">
      <h1 className="text-3xl">Trending</h1>
      <div className="carousel carousel-center max-20">
        <div className="carousel-item">
          {trends.map((trending) => {
            return (
              <div key={trending.title} className="py-4 pr-8 rounded-3xl relative">
                <div className="absolute top-6 right-12 card-item p-3 rounded-full hover:cursor-pointer">
                  <Image
                    src={"/assets/icon-bookmark-empty.svg"}
                    alt="bookmark"
                    width={15}
                    height={10}
                  />
                </div>
                <div className="absolute bottom-10  gap-2 left-8 flex flex-col">
                  <div className="flex items-center">
                    {trending.year} .{" "}
                    <div className="px-2">
                    {
                      <Image
                        src={
                          trending.category == "Movie"
                            ? "/assets/icon-category-movie.svg"
                            : "/assets/icon-icon-category-tv.svg"
                        }
                        alt="movies"
                        width={10}
                        height={10}
                      />
                    }
                    </div>
                    {trending.category}
                    {" "}.{" "}
                    {trending.rating}
                  </div>
                  <h3 className="text-3xl font-bold title">{trending.title}</h3>
                </div>
                <Image
                  src={trending.thumbnail?.trending?.large ?? ""}
                  alt={trending.title ?? ""}
                  width={500}
                  height={400}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trending;
