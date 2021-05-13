const titleSection = (video) => {
  if (video != null) {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={videoSrc} />
        </div>
        <div className="ui header">{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    );
  } else {
    return <div className="ui header">loading...</div>;
  }
};

const VideoDetail = (props) => {
  return <div className="ui segment">{titleSection(props.video)}</div>;
};

export default VideoDetail;
