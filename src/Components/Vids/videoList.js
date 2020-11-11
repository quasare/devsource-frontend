import React from 'react';
import VideoCard from './VideoCard'

export default function VideoList({video}) {
    let missing = !video
    if (missing) return <h1 className="mt-5">loading...</h1>;
    return (
        <div>{video.map((v) => <VideoCard video={v} />)}
        </div>
    )
}
