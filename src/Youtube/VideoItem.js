import React from 'react';
import './VideoItem.css';
const VideoItem = ({ video, handleVideoSelect, handleVideoSave }) => {

    // const thumbnails = video.snippet.thumbnails.default.url;
    const thumbnails = video.snippet.thumbnails.medium.url;
    const title = video.snippet.title;

    return (
        <div className="container">
            <div className="row card">
                <div className="card-img-top">
                    <img style={{ width: '100%' }}
                        src={thumbnails}
                        alt={title}
                        onClick={() => handleVideoSelect(video)}
                    />
                </div>
                <div className="card-body" dangerouslySetInnerHTML={{ __html: title.slice(0, 50) + '...' }}>
                </div>
                <div className="btnStyle">
                    <input
                        className='btn btn-sm btn-primary'
                        type="button"
                        value="Save"
                        onClick={() => handleVideoSave(video)}
                    />
                </div>
                {/* <div className="col-5" >
                            {title.slice(0,40)+'...'}
                        </div> */}
            </div>

        </div>
    );
};

export default VideoItem;
