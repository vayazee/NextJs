import UploadButtons from "../components/UploadButton";
import { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const BoxWithMargin = (props: any) => (
    <Box sx={{ m: 2, ...props.sx }}>{props.children}</Box>
);
// const BoxWithMargin = styled(Box)({
//     sx: {
//         m: 1,
//     },
// });

const UploadPage = () => {
    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box
                    sx={{
                        border: "1px solid black",
                        marginTop: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                    }}
                >
                    <BoxWithMargin>
                        <Typography variant="h5" color="CaptionText">
                            Create New Item
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                        >
                            Upload your song, music, voice file...
                        </Typography>
                    </BoxWithMargin>
                    <BoxWithMargin>
                        <UploadButtons />
                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            component="div"
                            sx={{ m: 1 }}
                        >
                            File types supported : mp3...
                        </Typography>
                    </BoxWithMargin>
                    <BoxWithMargin
                        sx={{
                            "& > :not(style)": {
                                minWidth: "50ch",
                            },
                        }}
                    >
                        <TextField
                            required
                            id="outlined-required"
                            size="small"
                            label="Item Name"
                            variant="outlined"
                        />
                    </BoxWithMargin>
                    <BoxWithMargin
                        sx={{
                            "& > :not(style)": {
                                minWidth: "50ch",
                            },
                        }}
                    >
                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            defaultValue=""
                        />
                    </BoxWithMargin>
                </Box>
            </Container>
        </Fragment>
    );
};

export default UploadPage;
