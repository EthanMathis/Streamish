import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const NewVideoForm = () => {

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
    }

    return (

        <Form>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="Url" id="Url" placeholder="Name your new upload" onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="Url">Url</Label>
                <Input type="text" name="Url" id="Url" placeholder="Enter a YouTube Url here" onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" name="description" id="description" placeholder="Optional video description..." onChange={handleInputChange} />
            </FormGroup>
            <Button onClick={handleSubmit}>Submit</Button>
        </Form>
    )
};

export default NewVideoForm;