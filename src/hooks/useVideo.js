import { useState, useEffect } from "react";
import youttubeAPI from "../apis/youtube";

const useVideo = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const startSearch = async () => {
      await search(defaultSearchTerm);
    };
    startSearch();
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youttubeAPI.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideo;
