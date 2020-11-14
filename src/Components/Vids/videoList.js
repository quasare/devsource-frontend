import React from 'react';
import VideoCard from './VideoCard'
import { Col, Row, Container } from '@bootstrap-styled/v4';

export default function VideoList({video}) {
    let missing = !video
    if (missing) return <h1 className="mt-5">loading...</h1>;
    return (
        <Row  >
        {video.map((v) => <Col> <VideoCard video={v} /></Col>)}
        </Row>
    )
}
