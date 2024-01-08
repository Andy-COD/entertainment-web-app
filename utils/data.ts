interface Thumbnail {
  trending?: {
    small?: string;
    large?: string;
  };
  regular?: {
    small?: string;
    medium?: string;
    large?: string;
  };
}

export interface MovieData {
  id?: string;
  title?: string;
  thumbnail?: Thumbnail;
  year?: number;
  category?: string;
  rating?: string;
  isBookmarked?: boolean;
  isTrending?: boolean;
  [key: number]: any;
}

export const data: MovieData[] = [
  {
    "title": "Beyond Earth",
    "thumbnail": {
      "trending": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/beyond-earth/trending/small.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/beyond-earth/trending/large.jpg"
      },
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/beyond-earth/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/beyond-earth/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/beyond-earth/regular/large.jpg"
      }
    },
    "year": 2019,
    "category": "Movie",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": true
  },
  {
    "title": "Bottom Gear",
    "thumbnail": {
      "trending": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/bottom-gear/trending/small.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/bottom-gear/trending/large.jpg"
      },
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/bottom-gear/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/bottom-gear/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/bottom-gear/regular/large.jpg"
      }
    },
    "year": 2021,
    "category": "Movie",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": true
  },
  {
    "title": "Undiscovered Cities",
    "thumbnail": {
      "trending": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/undiscovered-cities/trending/small.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/undiscovered-cities/trending/large.jpg"
      },
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/undiscovered-cities/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/undiscovered-cities/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/undiscovered-cities/regular/large.jpg"
      }
    },
    "year": 2019,
    "category": "TV Series",
    "rating": "E",
    "isBookmarked": false,
    "isTrending": true
  },
  {
    "title": "1998",
    "thumbnail": {
      "trending": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/1998/trending/small.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/1998/trending/large.jpg"
      },
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/1998/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/1998/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/1998/regular/large.jpg"
      }
    },
    "year": 2021,
    "category": "Movie",
    "rating": "18+",
    "isBookmarked": false,
    "isTrending": true
  },
  {
    "title": "Dark Side of the Moon",
    "thumbnail": {
      "trending": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/dark-side-of-the-moon/trending/small.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/dark-side-of-the-moon/trending/large.jpg"
      },
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/dark-side-of-the-moon/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/dark-side-of-the-moon/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/dark-side-of-the-moon/regular/large.jpg"
      }
    },
    "year": 2018,
    "category": "TV Series",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": true
  },
  {
    "title": "The Great Lands",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/the-great-lands/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/the-great-lands/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/the-great-lands/regular/large.jpg"
      }
    },
    "year": 2019,
    "category": "Movie",
    "rating": "E",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "The Diary",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/the-diary/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/the-diary/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/the-diary/regular/large.jpg"
      }
    },
    "year": 2019,
    "category": "TV Series",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Earth’s Untouched",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/earths-untouched/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/earths-untouched/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/earths-untouched/regular/large.jpg"
      }
    },
    "year": 2017,
    "category": "Movie",
    "rating": "18+",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "No Land Beyond",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/no-land-beyond/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/no-land-beyond/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/no-land-beyond/regular/large.jpg"
      }
    },
    "year": 2019,
    "category": "Movie",
    "rating": "E",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "During the Hunt",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/during-the-hunt/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/during-the-hunt/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/during-the-hunt/regular/large.jpg"
      }
    },
    "year": 2016,
    "category": "TV Series",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Autosport the Series",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/autosport-the-series/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/autosport-the-series/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/autosport-the-series/regular/large.jpg"
      }
    },
    "year": 2016,
    "category": "TV Series",
    "rating": "18+",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Same Answer II",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/same-answer-2/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/same-answer-2/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/same-answer-2/regular/large.jpg"
      }
    },
    "year": 2017,
    "category": "Movie",
    "rating": "E",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Below Echo",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/below-echo/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/below-echo/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/below-echo/regular/large.jpg"
      }
    },
    "year": 2016,
    "category": "TV Series",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "The Rockies",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/the-rockies/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/the-rockies/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/the-rockies/regular/large.jpg"
      }
    },
    "year": 2015,
    "category": "TV Series",
    "rating": "E",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Relentless",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/relentless/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/relentless/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/relentless/regular/large.jpg"
      }
    },
    "year": 2017,
    "category": "Movie",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Community of Ours",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/community-of-ours/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/community-of-ours/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/community-of-ours/regular/large.jpg"
      }
    },
    "year": 2018,
    "category": "TV Series",
    "rating": "18+",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Van Life",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/van-life/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/van-life/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/van-life/regular/large.jpg"
      }
    },
    "year": 2015,
    "category": "Movie",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "The Heiress",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/the-heiress/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/the-heiress/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/the-heiress/regular/large.jpg"
      }
    },
    "year": 2021,
    "category": "Movie",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Off the Track",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/off-the-track/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/off-the-track/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/off-the-track/regular/large.jpg"
      }
    },
    "year": 2017,
    "category": "Movie",
    "rating": "18+",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Whispering Hill",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/whispering-hill/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/whispering-hill/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/whispering-hill/regular/large.jpg"
      }
    },
    "year": 2017,
    "category": "Movie",
    "rating": "E",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "112",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/112/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/112/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/112/regular/large.jpg"
      }
    },
    "year": 2013,
    "category": "TV Series",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Lone Heart",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/lone-heart/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/lone-heart/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/lone-heart/regular/large.jpg"
      }
    },
    "year": 2017,
    "category": "Movie",
    "rating": "E",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Production Line",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/production-line/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/production-line/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/production-line/regular/large.jpg"
      }
    },
    "year": 2018,
    "category": "TV Series",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Dogs",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/dogs/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/dogs/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/dogs/regular/large.jpg"
      }
    },
    "year": 2016,
    "category": "TV Series",
    "rating": "E",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Asia in 24 Days",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/asia-in-24-days/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/asia-in-24-days/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/asia-in-24-days/regular/large.jpg"
      }
    },
    "year": 2020,
    "category": "TV Series",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "The Tasty Tour",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/the-tasty-tour/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/the-tasty-tour/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/the-tasty-tour/regular/large.jpg"
      }
    },
    "year": 2016,
    "category": "TV Series",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Darker",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/darker/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/darker/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/darker/regular/large.jpg"
      }
    },
    "year": 2017,
    "category": "Movie",
    "rating": "18+",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Unresolved Cases",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/unresolved-cases/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/unresolved-cases/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/unresolved-cases/regular/large.jpg"
      }
    },
    "year": 2018,
    "category": "TV Series",
    "rating": "18+",
    "isBookmarked": false,
    "isTrending": false
  },
  {
    "title": "Mission: Saturn",
    "thumbnail": {
      "regular": {
        "small": "gs://entertainment-web-app-fc959.appspot.com/mission-saturn/regular/small.jpg",
        "medium": "gs://entertainment-web-app-fc959.appspot.com/mission-saturn/regular/medium.jpg",
        "large": "gs://entertainment-web-app-fc959.appspot.com/mission-saturn/regular/large.jpg"
      }
    },
    "year": 2017,
    "category": "Movie",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": false
  }
]