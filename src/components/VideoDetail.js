import React from "react";


const VideoDetail = ({currentVideo}) =>{
  if (!currentVideo){
    return <div>Loading...</div>
  }
  const videoSrc = `https://www.youtube.com/embed/${currentVideo.id.videoId}` ;
    return(
      <div>
      <div className = "ui embed">
      <iframe title = "video player" src = {videoSrc}/>
      </div>
      <div className = "ui segment">
      <h4 className = "ui header">{currentVideo.snippet.title}</h4>
      <p>{currentVideo.snippet.description}</p>
      </div>
      </div>
    );
}

export default VideoDetail;
