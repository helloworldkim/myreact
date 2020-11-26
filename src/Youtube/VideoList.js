import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,handleVideoSelect,handleVideoSave}) => {
    console.log("VideoList!" , videos);
    console.log(videos);
    const resultVideos = videos.map(video =>{
        return (
                <VideoItem key={video.etag} video={video} handleVideoSave={handleVideoSave} handleVideoSelect={handleVideoSelect}/>
            )
    
    });


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {resultVideos}
                </div>
            </div>
        </div>
    );
};

export default VideoList;