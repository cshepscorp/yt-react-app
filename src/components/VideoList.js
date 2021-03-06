import React from "react";
import VideoItem from "./VideoItem";

// immediately deconstruct videos from props
const VideoList = ({ videos, onVideoSelect }) => {
  // props.videos
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui related divided list">{renderedList}</div>;
};

export default VideoList;
