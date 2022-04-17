import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import React from "react";
import MediaControlCard from "../components/MediaControlCard";
import Box from "@mui/material/Box";

const Widget = styled("div")(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    width: 343,
    maxWidth: "100%",
    margin: "auto",
    position: "relative",
    zIndex: 1,
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(0,0,0,0.6)"
            : "rgba(100,100,100,0.4)",
    backdropFilter: "blur(40px)",
}));

export default function MusicListPage() {
    return (
        <Box
            sx={{
                position: "absolute",
                width: "98%",
                height: "70%",
                paddingLeft: "1%",
                top: "200px",
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={6} md={3}>
                    <MediaControlCard></MediaControlCard>
                </Grid>
                <Grid item xs={6} md={3}>
                    <MediaControlCard></MediaControlCard>
                </Grid>
                <Grid item xs={6} md={3}>
                    <MediaControlCard></MediaControlCard>
                </Grid>
                <Grid item xs={6} md={3}>
                    <MediaControlCard></MediaControlCard>
                </Grid>
                <Grid item xs={6} md={3}>
                    <MediaControlCard></MediaControlCard>
                </Grid>
                <Grid item xs={6} md={3}>
                    <MediaControlCard></MediaControlCard>
                </Grid>
                <Grid item xs={6} md={3}>
                    <MediaControlCard></MediaControlCard>
                </Grid>
                <Grid item xs={6} md={3}>
                    <MediaControlCard></MediaControlCard>
                </Grid>
            </Grid>
        </Box>
    );
}
