import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useParams } from "react-router-dom";
import Video from "./Video";
import { getProfileByIdWithVideos } from "../modules/videoManager";

const UserVideos = () => {
    const [userVideos, setUserVideos] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getProfileByIdWithVideos(id).then(videos => {
            console.log(videos)
            return setUserVideos(videos)
        });

    }, []);

    if (!userVideos) {
        return null;
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    {/* <Video video={video} /> */}
                    <div>
                        {userVideos.videos?.map((video) => (
                            <Video video={video} userProfile={userVideos} key={video.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserVideos;