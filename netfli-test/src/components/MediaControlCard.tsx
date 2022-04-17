import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";

export default function MediaControlCard() {
    const theme = useTheme();
    const [audio] = React.useState(
        new Audio(
            `${process.env.PUBLIC_URL}/music/Alan Walker - Spectre [NCS Release].mp3`
        )
    );
    const [isPlay, setIsPlay] = React.useState(false);

    React.useEffect(() => {
        isPlay ? audio.play() : audio.pause();
    }, [isPlay, audio]);

    return (
        <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                        Music Title
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                    >
                        composer
                    </Typography>
                </CardContent>
                <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                    <IconButton
                        aria-label="play/pause"
                        onClick={() => {
                            setIsPlay(!isPlay);
                        }}
                    >
                        {isPlay ? (
                            <PauseCircleOutlineOutlinedIcon
                                sx={{ height: 38, width: 38 }}
                            />
                        ) : (
                            <PlayCircleOutlineRoundedIcon
                                sx={{ height: 38, width: 38 }}
                            />
                        )}
                    </IconButton>
                </Box>
            </Box>
        </Card>
    );
}
