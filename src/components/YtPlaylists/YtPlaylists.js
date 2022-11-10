import React, { useEffect, useState } from 'react';

const API = 'AIzaSyAjwWnDdeHInz9TS1LTyG3loOrCLGyafYs';
//for specific channel
const channelId = 'UCwppdrjsBPAZg5_cUwQjfMQ';
let fetchUrl = `https://www.googleapis.com/youtube/v3/playlists?key=${API}&channelId=${channelId}&part=snippet,id,contentDetails&order=date&maxResults=10`;

const YtPlaylists = () => {
    const [allVideos, setAllVideos] = useState([])

    useEffect(() => {
        fetch(fetchUrl).then(res => res.json()).then(data => {
            console.log(data)
            const result = data.items.map(obj => ({
                ...obj,
                videoUrl: "https://www.youtube.com/embed/" + obj.id.videoId
            }))
            setAllVideos(result)
        })
    }, [])
    return (
        <div>
            {
                allVideos.map((video, index) =>
                    <a key={index} href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                        <img src={video.snippet.thumbnails.medium.url} width='170px' height='96px' alt='' />
                        <p>{video.snippet.title}</p>
                    </a>
                )
            }
        </div>
    );
};

export default YtPlaylists;