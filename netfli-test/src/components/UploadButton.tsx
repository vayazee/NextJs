import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AudiotrackRoundedIcon from "@mui/icons-material/AudiotrackRounded";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const Input = styled("input")({
    display: "none",
});

export default function UploadButtons() {
    const [fileName, setFileName] = useState("");

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
    };

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
                <Input
                    accept="audio/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={handleFileInput}
                />
                <Button variant="contained" component="span">
                    Upload
                    <AudiotrackRoundedIcon />
                </Button>
            </label>
        </Stack>
    );
}
