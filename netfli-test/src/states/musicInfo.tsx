import { atom } from "recoil";

export interface ImusicInfo {
    title: string;
    cover_img: string;
    addtional_info: object;
}

export const initialMusicInfo: ImusicInfo = {
    title: "",
    cover_img: "",
    addtional_info: {},
};

export const currentMusicState = atom<ImusicInfo>({
    key: "music_info",
    default: initialMusicInfo,
});
