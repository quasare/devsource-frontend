import React from 'react';
import styled from "styled-components";

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`

export default function VideoCard({video}) {
    const {id, snippet} = video
    return (
        <div>
        <iframe width="420" height="315"
        src={`https://www.youtube.com/embed/${id.videoId}`}>
        </iframe>
        <i class="far fa-heart"></i>
        </div>
    )
}
