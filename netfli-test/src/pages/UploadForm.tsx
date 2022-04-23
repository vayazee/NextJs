import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import UploadButton from "../components/UploadButton";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import { useState } from "react";

const GridWithPadding = (props: any) => (
    <Grid
        sx={{
            pt: 5,
            ...props.sx,
        }}
    >
        {props.children}
    </Grid>
);

const UploadForm = () => {
    const [collection, setCollection] = useState("");
    const [blockChain, setBlockChain] = useState("");

    const handleCollectionChange = (event: SelectChangeEvent) => {
        setCollection(event.target.value);
    };

    const handleBlockChainChange = (event: SelectChangeEvent) => {
        setBlockChain(event.target.value);
    };
    return (
        <Container
            maxWidth="lg"
            sx={{ border: "1px solid black", pt: 3, pb: 7, mt: 4 }}
        >
            <Grid
                container
                item
                justifyContent="center"
                xs={10}
                lg={7}
                mx="auto"
                textAlign="center"
            >
                <Grid item xs={12}>
                    <Typography variant="h5">Upload Your Sound</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                    >
                        Upload your song, music, voice file...
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                item
                justifyContent="left"
                xs={10}
                lg={7}
                mx="auto"
                textAlign="left"
                spacing={3}
            >
                <Grid item xs={12}>
                    <UploadButton />
                </Grid>
                {/* <Grid item xs={12}>
                    <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        component="div"
                        sx={{ m: 0 }}
                    >
                        File types supported : mp3..
                    </Typography>
                </Grid> */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        size="small"
                        label="Item Name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        fullWidth
                        multiline
                        rows={4}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
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
                        <FormHelperText>Select your collection</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl required fullWidth>
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
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        endIcon={<SendIcon />}
                    >
                        Send
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UploadForm;
