import { useEffect, useState } from "react";

type Song = {
  id: number;
  title: string;
  artists: string;
  releaseDate: string;
};

// TODO: Implement a custom hook that fetches the top songs from an API
const useTopSongs = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchSongs = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate network delay
      setSongs([
        {
          id: 1,
          title: "Sprinter",
          artists: "Dave, Central Cee",
          releaseDate: "July 14, 2023",
        },
        {
          id: 2,
          title: "LALA",
          artists: "Myke Towers",
          releaseDate: "March 23, 2023",
        },
        {
          id: 3,
          title: "vampire",
          artists: "Olivia Rodrigo",
          releaseDate: "June 30, 2023",
        },
        {
          id: 4,
          title: "fukumean",
          artists: "Gunna",
          releaseDate: "May 15, 2023",
        },
        {
          id: 5,
          title: "Kill Bill",
          artists: "SZA",
          releaseDate: "Dec 8, 2022",
        },
        {
          id: 6,
          title: "Creepin’",
          artists: "The Weeknd, 21 Savage, Metro Boomin",
          releaseDate: "Dec 2, 2022",
        },
        {
          id: 7,
          title: "Daylight",
          artists: "David Kushner",
          releaseDate: "April 14, 2023",
        },
        {
          id: 8,
          title: "See You Again",
          artists: "Tyler, the Creator, Kali Uchis",
          releaseDate: "July 21, 2017",
        },
      ]);
      setLoading(false);
    };

    fetchSongs();
  }, []);

  return { songs, loading };
};

export default useTopSongs;
