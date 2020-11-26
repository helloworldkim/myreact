import React from 'react';
import './VideoDetail.css';
const VideoDetail = ({ video }) => {
    console.log("VideoDetail!");
    console.log(video);


    if (!video) {
        return (
            <div className="container centerAlign">
                <div className="row">
                    <div className="col">
                        Loading...
                    </div>
                </div>
            </div>
        );
    } else {

        const YoutubeSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
        return (
            <div className="container">
                <div className="row">
                    <div className="col videoContainer centerAlign">
                        <iframe className='video' title='Youtube video playler' allow='autoplay' allowFullScreen src={YoutubeSrc} ></iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5 dangerouslySetInnerHTML={{ __html: video.snippet.title }}></h5>
                        {/* <h5>{video.snippet.title}</h5> */}
                        <p>{video.snippet.description}</p>
                    </div>
                </div>
            </div>
        );
    }

};

export default VideoDetail;