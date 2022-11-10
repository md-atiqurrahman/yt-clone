import React, { useEffect, useState } from 'react';

const API = 'AIzaSyDDx1x4xjt1Ro3GqP14HG8XO8qPt3XuO0E';
//for specific channel
const channelId = 'UCq-Fj5jknLsUf-MWSy4_brA';
let fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;


// //for random videos
// let fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=rating&maxResults=30`;

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

    console.log(allVideos)

    return (
        <div>
            <h1>Hello everyone</h1>
            {
                allVideos.map((video, index)=> <iframe key={index} width="560" height="315" src={video.videoUrl} title={video.snippet.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
            }
        </div>
    );
};

export default YtVideos;