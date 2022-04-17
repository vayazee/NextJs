import UploadButtons from "../components/UploadButton";
import { Fragment, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const BoxWithMargin = (props: any) => (
    <Box
        sx={{
            m: 2,
            "& > :not(style)": {
                width: "50%",
                minWidth: "25ch",
            },
            ...props.sx,
        }}
    >
        {props.children}
    </Box>
);
// const BoxWithMargin = styled(Box)({
//     sx: {
//         m: 1,
//     },
// });

const UploadPage = () => {
    const [collection, setCollection] = useState("");
    const [blockChain, setBlockChain] = useState("");

    const handleCollectionChange = (event: SelectChangeEvent) => {
        setCollection(event.target.value);
    };

    const handleBlockChainChange = (event: SelectChangeEvent) => {
        setBlockChain(event.target.value);
    };

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
                    <BoxWithMargin>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            size="small"
                            label="Item Name"
                            variant="outlined"
                        />
                    </BoxWithMargin>
                    <BoxWithMargin>
                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            defaultValue=""
                        />
                    </BoxWithMargin>
                    <BoxWithMargin>
                        <FormControl>
                            <InputLabel id="demo-simple-select-helper-label">
                                Collections
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={collection}
                                label="Collections"
                                onChange={handleCollectionChange}
                            >
                                <MenuItem value={1}>MyCollection #1</MenuItem>
                                <MenuItem value={2}>MyCollection #2</MenuItem>
                                <MenuItem value={3}>MyCollection #3</MenuItem>
                            </Select>
                            <FormHelperText>
                                Select your collection
                            </FormHelperText>
                        </FormControl>
                    </BoxWithMargin>
                    <BoxWithMargin>
                        <FormControl required>
                            <InputLabel id="demo-simple-select-helper-label">
                                BlockChain
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={blockChain}
                                label="BlockChain"
                                onChange={handleBlockChainChange}
                            >
                                <MenuItem value={"Ethereum"}>Ethereum</MenuItem>
                                <MenuItem value={"Polygon"}>Polygon</MenuItem>
                            </Select>
                            <FormHelperText>Select BlockChain</FormHelperText>
                        </FormControl>
                    </BoxWithMargin>
                </Box>
            </Container>
        </Fragment>
    );
};

export default UploadPage;
