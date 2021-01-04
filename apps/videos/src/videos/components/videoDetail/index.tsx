import React from "react";
import { useSelector } from "react-redux";
import { getSelectedVideos } from "../../state/selectors";

const detail = {
  width: "100%",
  height: "400px",
  border: "0px",
};
const VideoDetail = () => {
  const video = useSelector(getSelectedVideos);
  const iframeUrl = video
    ? "https://www.youtube.com/embed/" + video.iframe
    : null;
  console.log(iframeUrl);
  return iframeUrl ? (
    <div>
      <iframe allowFullScreen src={iframeUrl} style={detail}></iframe>
    </div>
  ) : (
    <div />
  );
};

export default VideoDetail;
