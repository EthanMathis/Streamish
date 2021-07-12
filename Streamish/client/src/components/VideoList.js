import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos, videoSearch } from "../modules/videoManager";
import SearchCard from "./SearchCard";
import NewVideoForm from "./VideoForm";

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const [search, setSearch] = useState({});


    const getVideos = () => {
        getAllVideos().then(videos => setVideos(videos));
        console.log(videos);
    };

    const searchForVideos = (event) => {
        event.preventDefault();
        videoSearch(search.search)
            .then(res => setVideos(res));
    };

    const handleInputChange = (event) => {
        let newSearch = { ...search }
        let input = event.target.value;
        newSearch[event.target.id] = input;
        setSearch(newSearch);
    };

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <NewVideoForm />
                </div>
            </div>

            <hr />

            <div className="container">
                <div className="row justify-content-center">
                    <form>
                        <input type="text"
                            id="search"
                            className="videoSearch"
                            autoComplete="off"
                            placeholder="Search For a Video"
                            onChange={handleInputChange} />

                        <button type="submit" onClick={searchForVideos}>Search</button>
                    </form>
                </div>
                <div>

                    {videos.length === 0 ?
                        <div className="row justify-content-center">
                            {videos.map((video) => (
                                <Video video={video} key={video.id} />
                            ))}
                        </div> :
                        videos.map(video => <SearchCard result={video} key={video.id} />)}
                </div>

            </div>
        </>
    );
};

export default VideoList;