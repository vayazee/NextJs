import { Route, Routes } from "react-router-dom";
import { MainPage, MusicListPage, UploadPage } from "../pages";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/upload" element={<UploadPage />}></Route>
            <Route path="/music" element={<MusicListPage />}></Route>
        </Routes>
    );
};

export default Router;
