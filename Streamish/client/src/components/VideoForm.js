import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addVideo } from "../modules/videoManager";



const VideoForm = () => {

    const history = useHistory();

    const [newVideo, setNewVideo] = useState({
        title: "",
        url: "",
        description: ""
    });

    const handleInputChange = (event) => {
        let vidToBeAdded = { ...newVideo };
        let input = event.target.value;
        vidToBeAdded[event.target.id] = input;
        setNewVideo(vidToBeAdded);
    };

    const addNewVideo = (event) => {
        event.preventDefault();
        addVideo(newVideo).then((p) => {
            history.push("/");
        });
    };

    return (

        <div className="container w-75">
            <Form className="row justify-content-center">
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" id="title"
                        placeholder="Name your new video"
                        onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="url">Url</Label>
                    <Input type="text" name="url" id="url"
                        placeholder="Enter a YouTube Url"
                        onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description"
                        placeholder="Optional video description..."
                        onChange={handleInputChange} />
                </FormGroup>
                <Button className="btn btn-primary mt-2 w-50" onClick={addNewVideo}>Submit</Button>
            </Form>
        </div>
    )
};

export default VideoForm;