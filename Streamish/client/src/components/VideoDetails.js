import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useParams } from "react-router-dom";
import Video from "./Video";
import { getVideoById } from "../modules/videoManager";

const VideoDetails = () => {
    const [video, setVideo] = useState();
    const { id } = useParams();

    useEffect(() => {
        getVideoById(id).then(setVideo);
    }, []);

    if (!video) {
        return null;
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6 mt-2 pt-2">
                    <Video video={video} userProfile={video.userProfile} />
                    <ListGroup className="m-2 p-2">
                        {video.comments?.map((c) => (
                            <ListGroupItem>{c.message}</ListGroupItem>
                        ))}
                    </ListGroup>
                </div>
            </div>
        </div>
    );
};

export default VideoDetails;