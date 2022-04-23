import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AudiotrackRoundedIcon from "@mui/icons-material/AudiotrackRounded";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Typography from "@mui/material/Typography";

const Input = styled("input")({
    display: "none",
});

export default function UploadButton() {
    const [fileName, setFileName] = useState("");

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        const fileList = e.currentTarget.files;
        if (!fileList) return;

        setFileName(fileList[0].name);
    };

    return (
        <Stack alignItems="left">
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
            {/* 여기 나중에 삭제 버튼  */}
            <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
            >
                <b>upload fileName:</b>
                {fileName}
            </Typography>
            <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
                sx={{ m: 0 }}
            >
                File types supported : mp3..
            </Typography>
        </Stack>
    );
}
