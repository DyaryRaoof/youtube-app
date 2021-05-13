import React, { useState, useEffect } from "react";
import SearchBar from "./SeachBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideo from "../hooks/useVideo";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideo("e sports");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <SearchBar onSearchCallback={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
