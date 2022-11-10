import React, { useEffect, useState } from 'react';

const API = 'AIzaSyAjwWnDdeHInz9TS1LTyG3loOrCLGyafYs';
//for specific channel
const channelId = 'UCwppdrjsBPAZg5_cUwQjfMQ';
let fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`;


// //for random videos
// let fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=rating&maxResults=10`;

const YtVideos = () => {
    const [allVideos, setAllVideos] = useState([])

    useEffect(() =>{
        fetch(fetchUrl).then(res => res.json()).then(data => {
            const result = data.items.map(obj => ({
                ...obj,
                videoUrl: "https://www.youtube.com/embed/"+obj.id.videoId
            }))
            setAllVideos(result)
        })
    },[])

    return (
        <div>
            {
                allVideos.map((video, index)=> <iframe key={index} width="854" height="477" src={video.videoUrl} title={video.snippet.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
            }
        </div>
    );
};

export default YtVideos;